import { models } from '../models/chat.model'
import type { RequestProps } from '../types/chat'

export async function askOpenAI({ model, messageFeeds }: RequestProps) {
  if (!model || !(model in models)) throw new Error('Invalid model')

  try {
    const stream = models[model]({ model, messageFeeds })

    let content = ''
    for await (const chunk of stream) {
      content += chunk
    }

    return content
  } catch (error) {
    throw new Error('Failed to ask OpenAI')
  }
}

export async function askAnthropic({ model, messageFeeds }: RequestProps) {
  if (!model || !(model in models)) throw new Error('Invalid model')

  try {
    const stream = models[model]({ model, messageFeeds })

    let content = ''
    for await (const chunk of stream) {
      content += chunk
    }

    return content
  } catch (error) {
    throw new Error('Failed to ask Anthropic')
  }
}

export async function askGoogle({ model, messageFeeds }: RequestProps) {
  if (!model || !(model in models)) throw new Error('Invalid model')

  try {
    const stream = models[model]({ model, messageFeeds })

    let content = ''
    for await (const chunk of stream) {
      content += chunk
    }

    return content
  } catch (error) {
    throw new Error('Failed to ask Google')
  }
}
