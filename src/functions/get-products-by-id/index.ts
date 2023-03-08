import { handlerPath } from '@libs/handler-resolver';

export default {
	handler: `${handlerPath(__dirname)}/handler.main`,
	events: [
		{
			http: {
				method: 'get',
				path: 'products/{productId}',
				cors: true,
				responses: {
					200: {
						description: 'Returns product by id',
						bodyType: 'ProductBody',
					},
					404: {
						description: 'Product is not found',
						bodyType: 'ErrorBody',
					},
					500: {
						description: 'Internal server error',
						bodyType: 'ErrorBody',
					},
				},
			},
		},
	],
};
