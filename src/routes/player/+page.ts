import { get } from '$lib/utils/cmsFetch';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	const players = await get('/api/players', '');
	if (players)
		return {
			players
		};
	else throw redirect(302, '/combatant/none');
};
