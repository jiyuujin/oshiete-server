export type Provider = 'openai' | 'anthropic' | 'google'

export type Model = OpenAIModel | AnthropicModel | GoogleModel

/**
 * OpenAI models
 * https://platform.openai.com/docs/models
 * https://openai.com/api/pricing/
 */
export type OpenAIModel =
  | 'gpt-4o' // flagship model
  | 'gpt-4-turbo' // flagship model
  | 'gpt-4-turbo-2024-04-09'
  | 'gpt-4-turbo-preview'
  | 'gpt-4-0125-preview'
  | 'gpt-4-1106-preview'
  | 'gpt-4-vision-preview'
  | 'gpt-4-1106-vision-preview'
  | 'gpt-4'
  | 'gpt-4-0613'
  | 'gpt-4-32k'
  | 'gpt-4-32k-0613'
  | 'gpt-3.5-turbo-0125'
  | 'gpt-3.5-turbo' // flagship model
  | 'gpt-3.5-turbo-1106'
  | 'gpt-3.5-turbo-instruct'
  | 'gpt-3.5-turbo-16k'
  | 'gpt-3.5-turbo-0613'
  | 'gpt-3.5-turbo-instruct-0914'
  | 'gpt-3.5-turbo-16k-0613'
  | 'gpt-3.5-turbo-0301'
  | 'gpt-3.5-turbo-0125'

/**
 * Anthropic models
 * https://docs.anthropic.com/en/docs/models-overview
 * https://www.anthropic.com/api#pricing
 */
export type AnthropicModel =
  | 'claude-3.5-sonnet' // flagship model
  | 'claude-3-opus'
  | 'claude-3-haiku-20240307-v1'
  | 'claude-3-opus-20240229-v1' // flagship model
  | 'claude-3-sonnet-20240229-v1'
  | 'claude-v2.1'
  | 'claude-v2.0'
  | 'claude-instant-v1'

/**
 * Google models
 * https://ai.google.dev/gemini-api/docs/models/gemini
 * https://ai.google.dev/pricing
 */
export type GoogleModel =
  | 'gemini-1.5-pro' // flagship model
  | 'gemini-1.5-flash'
  | 'gemini-1.0-pro'
  | 'gemini-pro-vision'

export interface RequestProps {
  model: Model
  messageFeeds: MessageFeed[]
}

export interface MessageFeed {
  id: number
  host: boolean
  timestamp: string
  message: string
}
