import { describe, expect, test } from '@jest/globals';

import { getProductsById } from './handler';
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
		pathParameters: { productId: '19974f01-b97b-42b8-8b37-df988599ff63' },
		queryStringParameters: undefined,
		multiValueQueryStringParameters: undefined,
		stageVariables: undefined,
		requestContext: undefined,
		resource: '',
	} satisfies ValidatedAPIGatewayProxyEvent<Product>;

	const expectedProduct = {
		id: '19974f01-b97b-42b8-8b37-df988599ff63',
		count: 3,
		description: 'Description 1',
		price: 420,
		title: 'Title 1',
	} satisfies Product;

	test('returns product by id', async () => {
		const product = await getProductsById(event, null, null);

		expect(product).toEqual(
			formatJSONResponse(200, { product: expectedProduct })
		);
	});

	describe('returns 500 status', () => {
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
		} satisfies ValidatedAPIGatewayProxyEvent<Product>;

		test('if productId is not defined', async () => {
			const product = await getProductsById(event, null, null);

			expect(product).toEqual(
				formatJSONResponse(500, { message: 'ID is not defined.' })
			);
		});
	});

	describe('returns 500 status', () => {
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
		} satisfies ValidatedAPIGatewayProxyEvent<Product>;

		test('if productId is not found', async () => {
			const product = await getProductsById(event, null, null);

			expect(product).toEqual(
				formatJSONResponse(404, { message: 'Product is not found.' })
			);
		});
	});
});
