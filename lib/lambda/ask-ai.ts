import { match } from 'ts-pattern'
import { askAnthropic, askGoogle, askOpenAI } from '../repositories/chat.repository'
import { MessageFeed, Model, Provider } from '../types/chat'

export const handler = async (event: any = {}) => {
  const provider: Provider = event.pathParameters.provider
  if (!provider) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'provider is required' }),
    }
  }

  const model: Model = event.pathParameters.model
  if (!model) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'model is required' }),
    }
  }

  const messageFeeds: MessageFeed[] = event.pathParameters.messageFeeds
  if (!messageFeeds) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'messageFeeds is required' }),
    }
  }

  try {
    const result = match<Provider>(provider)
      .with('openai', () => askOpenAI({ model, messageFeeds }))
      .with('anthropic', () => askAnthropic({ model, messageFeeds }))
      .with('google', () => askGoogle({ model, messageFeeds }))
      .exhaustive()
    return { statusCode: 200, body: JSON.stringify(result) }
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify(err) }
  }
}
