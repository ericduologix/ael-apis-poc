// Reusable data function (used by composite endpoints)
export async function getPageInfoContext(request, env, ctx) {
	const url = new URL(request.url);

	return {
		pageId: 'example-page-id',
		pageName: 'Example Page Name',
		pageType: 'content',
		url: url.toString(),
	};
}

// HTTP handler (used by /v1/page-info)
export async function handlePageInfo(request, env, ctx) {
	const pageInfo = await getPageInfoContext(request, env, ctx);

	return Response.json({
		contextType: 'page',
		...pageInfo,
	});
}
