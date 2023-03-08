import { describe, expect, test } from '@jest/globals';

import { getProductsList } from './handler';
import { PRODUCTS } from '@mocks/products';
import { formatJSONResponse } from '@libs/api-gateway';
import type { ValidatedAPIGatewayProxyEvent } from 'src/@typings/aws';
import type { Product } from 'src/@typings/product';

describe('#getProducts', () => {
	const event = {
		headers: {
			'Content-Type': 'application/json',
		},
		body: undefined,
		multiValueHeaders: undefined,
		httpMethod: '',
		isBase64Encoded: false,
		path: '',
		pathParameters: undefined,
		queryStringParameters: undefined,
		multiValueQueryStringParameters: undefined,
		stageVariables: undefined,
		requestContext: undefined,
		resource: '',
	} satisfies ValidatedAPIGatewayProxyEvent<Product[]>;

	test('returns all products array', async () => {
		const products = await getProductsList(event, null, null);

		expect(products).toEqual(formatJSONResponse(200, { products: PRODUCTS }));
	});
});
