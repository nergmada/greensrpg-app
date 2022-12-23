import { get } from '$lib/utils/cmsFetch';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params: { campaign } }: { params: { campaign: string } }) => {
	const game = await get('/api/game/{id}', '', {
		id: campaign
	});
	if (game)
		return {
			game
		};
	else throw redirect(302, '/combatant/none');
};
