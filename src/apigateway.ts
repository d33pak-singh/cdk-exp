import { Api, Stack } from '@serverless-stack/resources';

import { lambdaFunctions } from './lambda';

export const createApiGateway = (scope: Stack, fns: lambdaFunctions) =>
new Api(scope, 'Api', {
  routes: {
    'GET /schema': fns.getSchema
  },
});