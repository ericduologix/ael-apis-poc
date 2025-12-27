export async function handleUser(request, env, ctx) {
	// For now, stubbed data – later this can call AEL/user service, etc.
	return Response.json({
		contextType: 'user',
		userId: 'example-user-123',
		accountType: 'guest',
		segments: ['anonymous', 'new_visitor'],
	});
}
