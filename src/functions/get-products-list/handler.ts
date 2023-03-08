import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { PRODUCTS } from '@mocks/products';
import type { ValidatedEventAPIGatewayProxyEvent } from 'src/@typings/aws';
import type { Product } from 'src/@typings/product';

export const getProductsList: ValidatedEventAPIGatewayProxyEvent<
	Product[]
> = async () => {
	return formatJSONResponse(200, {
		products: PRODUCTS,
	});
};

export const main = middyfy(getProductsList);
