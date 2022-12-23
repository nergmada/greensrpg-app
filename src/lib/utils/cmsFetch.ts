import axios from 'axios';

import { PUBLIC_CMS_URL } from '$env/static/public';
import { errors } from '$lib/data/errors';

export async function get<T extends GetEndpoint>(
	endpoint: T,
	query: string,
	substitutes: Record<string, string> = {}
): Promise<CMSResponseType<T> | null> {
	console.log(PUBLIC_CMS_URL);
	const subEndpoint = Object.keys(substitutes).reduce(
		(prev, k) => prev.replace(`{${k}}`, substitutes[k]),
		endpoint
	);
	const url = `${PUBLIC_CMS_URL}${subEndpoint}`;
	console.log(url);
	try {
		const { data } = await axios.get(url);
		return data;
	} catch (err) {
		// errors.update((v) => [...v, err]);
		return null;
	}
}
