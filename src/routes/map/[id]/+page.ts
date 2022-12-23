import { get } from '$lib/utils/cmsFetch';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params: { id } }: { params: { id: string } }) => {
	const map = await get('/api/maps/{id}', '', {
		id
	});
	console.log(map);
	if (map)
		return {
			map
		};
	else throw redirect(302, '/map/none');
};
