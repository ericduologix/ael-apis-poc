// Reusable data function (used by composite endpoints)
export async function getProductContext(request, env, ctx) {
	return {
		sku: 'EXAMPLE-SKU-001',
		name: 'Example Product',
		category: 'Sample Category',
		price: 99.99,
		currency: 'USD',
	};
}

// HTTP handler (used by /v1/product)
export async function handleProduct(request, env, ctx) {
	const product = await getProductContext(request, env, ctx);

	return Response.json({
		contextType: 'product',
		...product,
	});
}
