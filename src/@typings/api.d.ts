import { Product } from './product';

export interface ProductListBody {
	products: Product[];
}

export interface ProductBody {
	product: Product;
}

export interface ErrorBody {
	message: string;
}
