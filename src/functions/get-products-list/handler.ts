import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { PRODUCTS } from '@mocks/products';

export const getProductsList: ValidatedEventAPIGatewayProxyEvent<
	Product[]
> = async () => {
	return formatJSONResponse(200, {
		products: PRODUCTS,
	});
};

export const main = middyfy(getProductsList);
