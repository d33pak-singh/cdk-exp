import { Construct, Stack, StackProps } from '@aws-cdk/core';
// import { createApiGateway } from '../src/apigateway';
import { VpcStack } from '../src/vpc';
import { DbStack } from '../src/db';

export class CdkExpStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new VpcStack(this, 'VpcStack');

    const db = new DbStack(this, 'DbStack', { vpc: vpc.vpc });

  }
}
