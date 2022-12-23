import { get } from '$lib/utils/cmsFetch';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	const campaigns = await get('/api/campaigns', '');
	if (campaigns)
		return {
			campaigns
		};
	else throw redirect(302, '/combatant/none');
};
