// create a svelte server side get endpoint the throws a redirect error to / 

import { redirect } from "@sveltejs/kit";

export async function GET() {
    throw redirect(302, '/');
}