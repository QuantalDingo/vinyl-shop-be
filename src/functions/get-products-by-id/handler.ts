import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { PRODUCTS } from '@mocks/products';

export const getProductsById: ValidatedEventAPIGatewayProxyEvent<
	Product
> = async (event) => {
	const products = [...PRODUCTS];

	try {
		const id = event.pathParameters.productId;

		if (!id) {
			throw new Error('ID is not defined.');
		}

		const product = products.find((item) => item.id === id);

		if (!product) {
			throw new Error('Product is not found.');
		}

		return formatJSONResponse(200, {
			product,
		});
	} catch (e: unknown) {
		if (e instanceof Error) {
			return formatJSONResponse(404, { message: e.message });
		}
	}
};

export const main = middyfy(getProductsById);
