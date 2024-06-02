import * as cdk from 'aws-cdk-lib'
import { Runtime } from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs'
import * as path from 'path'
// import * as sqs from 'aws-cdk-lib/aws-sqs'

export class OshieteServerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    new cdk.aws_lambda_nodejs.NodejsFunction(this, 'askAIFunction', {
      entry: path.join(__dirname, './lambda/ask-ai.ts'),
      runtime: Runtime.NODEJS_16_X,
      handler: 'handler',
      environment: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY!,
        ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY!,
        GOOGLE_API_KEY: process.env.GOOGLE_API_KEY!,
      },
    })
  }
}
