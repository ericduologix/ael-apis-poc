// Reusable data function (used by composite endpoints)
export async function getCartContext(request, env, ctx) {
	return {
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
	};
}

// HTTP handler (used by /v1/cart)
export async function handleCart(request, env, ctx) {
	const cart = await getCartContext(request, env, ctx);

	return Response.json({
		contextType: 'cart',
		...cart,
	});
}
