#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkExpStack } from '../lib/cdk-exp-stack';

const app = new cdk.App();
new CdkExpStack(app, 'CdkExpStack');
