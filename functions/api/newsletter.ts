interface Env {
	MAILCHIMP_API_KEY: string;
	MAILCHIMP_SERVER_PREFIX: string;
	MAILCHIMP_LIST_ID: string;
}

interface MailchimpErrorResponse {
	title?: string;
	detail?: string;
	status?: number | string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
	const corsHeaders = {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	};

	let body: Record<string, string>;
	const contentType = request.headers.get('content-type') ?? '';

	if (contentType.includes('application/json')) {
		body = await request.json() as Record<string, string>;
	} else {
		const formData = await request.formData();
		body = Object.fromEntries(
			[...formData.entries()].map(([k, v]) => [k, String(v)])
		);
	}

	const { name, email, company, position, country } = body;

	if (!name || !email) {
		return new Response(
			JSON.stringify({ error: 'generic' }),
			{ status: 400, headers: corsHeaders }
		);
	}

	const { MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_LIST_ID } = env;

	const mailchimpUrl = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

	const mcResponse = await fetch(mailchimpUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`,
		},
		body: JSON.stringify({
			email_address: email,
			status: 'subscribed',
			merge_fields: {
				FNAME: name,
				COMPANY: company ?? '',
				JOBTITLE: position ?? '',
				COUNTRY: country ?? '',
			},
		}),
	});

	if (mcResponse.ok) {
		return new Response(
			JSON.stringify({ success: true }),
			{ status: 200, headers: corsHeaders }
		);
	}

	const mcError = await mcResponse.json() as MailchimpErrorResponse;

	if (mcError.title === 'Member Exists') {
		return new Response(
			JSON.stringify({ error: 'already_subscribed' }),
			{ status: 409, headers: corsHeaders }
		);
	}

	return new Response(
		JSON.stringify({ error: 'generic' }),
		{ status: 500, headers: corsHeaders }
	);
};
