export class ProductNotFoundError extends Error {
	constructor(message: string) {
		super(message);
	}
}
