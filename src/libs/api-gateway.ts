export const formatJSONResponse = (
	statusCode: number,
	response: Record<string, unknown>
) => {
	return {
		statusCode,
		body: JSON.stringify(response),
	};
};
