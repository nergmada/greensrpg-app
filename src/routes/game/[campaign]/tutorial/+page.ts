import { get } from '$lib/utils/cmsFetch';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	const tutorial = await get('/api/tutorial', '');
	if (tutorial)
		return {
			tutorial
		};
	else throw redirect(302, '/combatant/none');
};
