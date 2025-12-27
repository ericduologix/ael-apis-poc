import { routeRequest } from './router.js';

export default {
	async fetch(request, env, ctx) {
		try {
			return await routeRequest(request, env, ctx);
		} catch (err) {
			// If anything blows up, you still get a response in Postman
			return Response.json(
				{
					error: 'Unhandled error in worker',
					message: err?.message || String(err),
					stack: err?.stack || null,
				},
				{ status: 500 }
			);
		}
	},
};
