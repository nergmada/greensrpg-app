// create a sveltekit get endpoint that retrieves a JWT cookie, decodes it, and routes to the /select page

import type { RequestEvent } from ".svelte-kit/types/src/routes/campaign/$types";
import { redirect } from "@sveltejs/kit";


export async function GET({ cookies, params: { campaign } } : RequestEvent) : Promise<Response> {
    // TODO: retrieve the campaign data from DB and cross reference player ID

    const player_id = cookies.get("player_id");
    if (player_id) {
        const tutorial = cookies.get("tutorial");
        if (tutorial) throw redirect(302, `/campaign/${campaign}/tutorial`);
        else throw redirect(302, `/campaign/${campaign}/play`);
    } 
    throw redirect(302, `/campaign/${campaign}/select`);
}