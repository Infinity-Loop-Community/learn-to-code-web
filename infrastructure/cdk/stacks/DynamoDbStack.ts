import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';

export default class DynamoDbStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: cdk.StackProps, env: string) {
    super(scope, `${id}-${env}`, props);

    new dynamodb.Table(this, 'NextAuthTable', {
      tableName: `${env}_next_auth`,
      partitionKey: {
        name: 'pk',
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: 'sk',
        type: dynamodb.AttributeType.STRING,
      },
      timeToLiveAttribute: 'expires',
      billingMode: dynamodb.BillingMode.PROVISIONED,
      readCapacity: 1,
      writeCapacity: 1,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Useful for dev/test environments
    }).addGlobalSecondaryIndex({
      indexName: 'GSI1',
      partitionKey: {
        name: 'GSI1PK',
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: 'GSI1SK',
        type: dynamodb.AttributeType.STRING,
      },
      projectionType: dynamodb.ProjectionType.ALL,
    });
  }
}