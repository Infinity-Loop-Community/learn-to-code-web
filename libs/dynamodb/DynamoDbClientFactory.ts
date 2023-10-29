import {DynamoDB, DynamoDBClientConfig} from "@aws-sdk/client-dynamodb";
import configuration from "@/config/configuration";
import {DynamoDBDocument} from "@aws-sdk/lib-dynamodb";

export default class DynamoDbClientFactory {

  constructor(awsAccessKeyId = configuration.awsAccessKey.id, awsSecretAccessKey = configuration.awsAccessKey.secret) {
    this.config = {
      credentials: {
        accessKeyId: awsAccessKeyId,
        secretAccessKey: awsSecretAccessKey,
      },
      region: "eu-central-1",
    };

  }


  config: DynamoDBClientConfig;

  create() {
    return DynamoDBDocument.from(new DynamoDB(this.config), {
      marshallOptions: {
        convertEmptyValues: true,
        removeUndefinedValues: true,
        convertClassInstanceToMap: true,
      },
    })
  }

}