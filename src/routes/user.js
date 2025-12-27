// Reusable data function (used by composite endpoints)
export async function getUserContext(request, env, ctx) {
	return {
		userId: 'example-user-123',
		accountType: 'guest',
		segments: ['anonymous', 'new_visitor'],
	};
}

// HTTP handler (used by /v1/user)
export async function handleUser(request, env, ctx) {
	const user = await getUserContext(request, env, ctx);

	return Response.json({
		contextType: 'user',
		...user,
	});
}
