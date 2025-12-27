import { handleUser } from './routes/user.js';
import { handleProduct } from './routes/product.js';
import { handlePageInfo } from './routes/pageInfo.js';
import { handleCart } from './routes/cart.js';

// Simple route table: method + path -> handler
const routes = [
	{ method: 'GET', path: '/debug', handler: () => Response.json({ ok: true }) },
	{ method: 'GET', path: '/v1/user', handler: handleUser },
	{ method: 'GET', path: '/v1/product', handler: handleProduct },
	{ method: 'GET', path: '/v1/page-info', handler: handlePageInfo },
	{ method: 'GET', path: '/v1/cart', handler: handleCart },
];

export async function routeRequest(request, env, ctx) {
	const url = new URL(request.url);
	const { pathname } = url;
	const method = request.method;

	const match = routes.find((route) => route.method === method && route.path === pathname);

	if (match) {
		return match.handler(request, env, ctx);
	}

	// 404 fallback
	return Response.json(
		{
			error: 'Not Found',
			path: pathname,
			method,
		},
		{ status: 404 }
	);
}
