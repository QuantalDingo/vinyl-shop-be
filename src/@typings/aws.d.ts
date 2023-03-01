declare type ValidatedAPIGatewayProxyEvent<S> = Omit<
	import('aws-lambda').APIGatewayProxyEvent,
	'body'
> & { body: import('json-schema-to-ts').FromSchema<S> };

declare type ValidatedEventAPIGatewayProxyEvent<S> =
	import('aws-lambda').Handler<
		ValidatedAPIGatewayProxyEvent<S>,
		import('aws-lambda').APIGatewayProxyResult
	>;
