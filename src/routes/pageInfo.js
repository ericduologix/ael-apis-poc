export async function handlePageInfo(request, env, ctx) {
	const url = new URL(request.url);

	return Response.json({
		contextType: 'page',
		pageId: 'example-page-id',
		pageName: 'Example Page Name',
		pageType: 'content',
		url: url.toString(),
	});
}
