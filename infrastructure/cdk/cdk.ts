import * as cdk from '@aws-cdk/core';
import DynamoDbStack from "./stacks/DynamoDbStack";

const app = new cdk.App();

const env = app.node.tryGetContext('env') || 'dev'; // Get environment context or default to 'dev'

new DynamoDbStack(app, 'DynamoDbStack', {
  env: {
    // account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "eu-central-1",
  },
}, env);