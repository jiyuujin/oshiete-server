import { anthropicStream, googleStream, openAIStream } from '../services/chat.service'

export const models = {
  'gpt-4o': openAIStream,
  'gpt-4-turbo': openAIStream,
  'gpt-4-turbo-2024-04-09': openAIStream,
  'gpt-4-turbo-preview': openAIStream,
  'gpt-4-0125-preview': openAIStream,
  'gpt-4-1106-preview': openAIStream,
  'gpt-4-vision-preview': openAIStream,
  'gpt-4-1106-vision-preview': openAIStream,
  'gpt-4': openAIStream,
  'gpt-4-0613': openAIStream,
  'gpt-4-32k': openAIStream,
  'gpt-4-32k-0613': openAIStream,
  'gpt-3.5-turbo': openAIStream,
  'gpt-3.5-turbo-1106': openAIStream,
  'gpt-3.5-turbo-instruct': openAIStream,
  'gpt-3.5-turbo-16k': openAIStream,
  'gpt-3.5-turbo-0613': openAIStream,
  'gpt-3.5-turbo-instruct-0914': openAIStream,
  'gpt-3.5-turbo-16k-0613': openAIStream,
  'gpt-3.5-turbo-0301': openAIStream,
  'gpt-3.5-turbo-0125': openAIStream,
  'claude-3-haiku-20240307-v1': anthropicStream,
  'claude-3-opus': anthropicStream,
  'claude-3-opus-20240229-v1': anthropicStream,
  'claude-3-sonnet-20240229-v1': anthropicStream,
  'claude-v2.1': anthropicStream,
  'claude-v2.0': anthropicStream,
  'claude-instant-v1': anthropicStream,
  'gemini-1.5-pro': googleStream,
  'gemini-1.5-flash': googleStream,
  'gemini-1.0-pro': googleStream,
  'gemini-pro-vision': googleStream,
}
