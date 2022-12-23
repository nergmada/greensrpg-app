import { get } from '$lib/utils/cmsFetch';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	const combatants = await get('/api/combatants', '');
	if (combatants)
		return {
			combatants
		};
	else throw redirect(302, '/combatant/none');
};
