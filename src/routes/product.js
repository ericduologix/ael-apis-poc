export async function handleProduct(request, env, ctx) {
	return Response.json({
		contextType: 'product',
		sku: 'EXAMPLE-SKU-001',
		name: 'Example Product',
		category: 'Sample Category',
		price: 99.99,
		currency: 'USD',
	});
}
