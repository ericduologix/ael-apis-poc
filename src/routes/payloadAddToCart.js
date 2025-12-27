import { getUserContext } from './user.js';
import { getProductContext } from './product.js';
import { getCartContext } from './cart.js';
import { getPageInfoContext } from './pageInfo.js';

export async function handlePayloadAddToCart(request, env, ctx) {
	const [user, product, cart, pageInfo] = await Promise.all([
		getUserContext(request, env, ctx),
		getProductContext(request, env, ctx),
		getCartContext(request, env, ctx),
		getPageInfoContext(request, env, ctx),
	]);

	return Response.json({
		event: 'cart.add', // or whatever you want to standardize on
		user,
		product,
		cart,
		pageInfo,
		generatedAt: new Date().toISOString(),
	});
}
