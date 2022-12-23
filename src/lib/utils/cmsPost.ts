import axios from 'axios';

import { PUBLIC_CMS_URL } from '$env/static/public';
import { browser } from '$app/environment';

export async function post<T extends GetEndpoint>(
	endpoint: T,
	query: string,
	substitutes: Record<string, string> = {}
): Promise<CMSResponseType<T> | null> {
	const subEndpoint = Object.keys(substitutes).reduce(
		(prev, k) => prev.replace(`{${k}}`, substitutes[k]),
		endpoint
	);
	const url = `${PUBLIC_CMS_URL}${subEndpoint}`;
	try {
		const { data } = await axios.post(url, {});
		return data;
	} catch (err) {
		console.log(err);
		// errors.update((v) => [...v, err]);
		return null;
	}
}
