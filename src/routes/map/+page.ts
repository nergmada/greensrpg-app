import { get } from '$lib/utils/cmsFetch';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	const maps = await get('/api/maps', '');
	if (maps)
		return {
			maps
		};
	else throw redirect(302, '/map/none');
};
