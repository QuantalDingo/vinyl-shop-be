import { describe, expect, test } from '@jest/globals';

import { getProductsById } from './handler';
import { PRODUCTS } from '@mocks/products';
import { formatJSONResponse } from '@libs/api-gateway';

describe('#getProductsById', () => {
	const event = {
		headers: {
			'Content-Type': 'application/json',
		},
		body: undefined,
		multiValueHeaders: undefined,
		httpMethod: '',
		isBase64Encoded: false,
		path: '',
		pathParameters: { productId: '1' },
		queryStringParameters: undefined,
		multiValueQueryStringParameters: undefined,
		stageVariables: undefined,
		requestContext: undefined,
		resource: '',
		rawBody: '',
	};

	test('returns product by id', async () => {
		const product = await getProductsById(event, null, null);

		expect(product).toEqual(formatJSONResponse(200, { product: PRODUCTS[0] }));
	});

	describe('returns 404 status', () => {
		test('if productId is not defined', async () => {
			const event = {
				headers: {
					'Content-Type': 'application/json',
				},
				body: undefined,
				multiValueHeaders: undefined,
				httpMethod: '',
				isBase64Encoded: false,
				path: '',
				pathParameters: { productId: undefined },
				queryStringParameters: undefined,
				multiValueQueryStringParameters: undefined,
				stageVariables: undefined,
				requestContext: undefined,
				resource: '',
				rawBody: '',
			};

			const product = await getProductsById(event, null, null);

			expect(product).toEqual(
				formatJSONResponse(404, { message: 'ID is not defined.' })
			);
		});

		test('if productId is not found', async () => {
			const event = {
				headers: {
					'Content-Type': 'application/json',
				},
				body: undefined,
				multiValueHeaders: undefined,
				httpMethod: '',
				isBase64Encoded: false,
				path: '',
				pathParameters: { productId: '0' },
				queryStringParameters: undefined,
				multiValueQueryStringParameters: undefined,
				stageVariables: undefined,
				requestContext: undefined,
				resource: '',
				rawBody: '',
			};

			const product = await getProductsById(event, null, null);

			expect(product).toEqual(
				formatJSONResponse(404, { message: 'Product is not found.' })
			);
		});
	});
});
