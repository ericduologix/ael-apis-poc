export async function handleCart(request, env, ctx) {
	return Response.json({
		contextType: 'cart',
		cartId: 'example-cart-789',
		itemCount: 2,
		subtotal: 199.98,
		currency: 'USD',
		items: [
			{
				sku: 'EXAMPLE-SKU-001',
				name: 'Example Product',
				quantity: 2,
				price: 99.99,
			},
		],
	});
}
