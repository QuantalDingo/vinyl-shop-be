import { AWS } from '@serverless/typescript';
import {
	APIGatewayProxyEvent,
	Handler,
	APIGatewayProxyResult,
} from 'aws-lambda';

import { FromSchema } from 'json-schema-to-ts';

export type ValidatedAPIGatewayProxyEvent<S> = Omit<
	APIGatewayProxyEvent,
	'body'
> & { body: FromSchema<S> };

export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<
	ValidatedAPIGatewayProxyEvent<S>,
	APIGatewayProxyResult
>;
