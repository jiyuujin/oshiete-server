import OpenAI from 'openai'
import Anthropic from '@anthropic-ai/sdk'
import { GoogleGenerativeAI } from '@google/generative-ai'
import type { RequestProps } from '../types/chat'

export async function* openAIStream({ model, messageFeeds }: RequestProps) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })

  const stream = await openai.chat.completions.create({
    model,
    messages: messageFeeds.map((m) => ({ role: 'user', content: m.message })),
    stream: true,
  })

  for await (const chunk of stream) {
    const event = chunk.choices[0]
    if (event.delta?.content != null) {
      yield event.delta.content
    }
  }
}

export async function* anthropicStream({ model, messageFeeds }: RequestProps) {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  })

  const stream = anthropic.messages.stream({
    model,
    messages: messageFeeds.map((m) => ({ role: 'user', content: m.message })),
    max_tokens: 4096,
  })

  for await (const event of stream) {
    if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
      yield event.delta.text
    }
  }
}

export async function* googleStream({ model, messageFeeds }: RequestProps) {
  const google = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!).getGenerativeModel({
    model,
  })

  const messages = messageFeeds.map((m) => ({ role: 'user', content: m.message }))

  const last = messages.pop()?.content
  const chat = google.startChat({
    history: messages.map(({ role, content }) => ({
      role: role === 'assistant' ? 'model' : 'user',
      parts: [{ text: content }],
    })),
  })
  const result = await chat.sendMessageStream(last!)
  for await (const chunk of result.stream) {
    yield chunk.text()
  }
}
