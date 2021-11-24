import { Vpc } from "@aws-cdk/aws-ec2";
import { Stack, StackProps, Construct } from '@aws-cdk/core';
import { Function, Code, Runtime } from '@aws-cdk/aws-lambda';

interface LambdaStackProps extends StackProps {
  vpc: Vpc
}

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props: LambdaStackProps) {
    super(scope, id, props);
    
    new Function(this, 'experiment-lambda', {
      code: Code.fromAsset('resources'),
      handler: 'index.handler',
      runtime: Runtime.NODEJS_10_X,
      vpc: props.vpc
    });
  }
}