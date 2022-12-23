import { writable, type Writable } from "svelte/store";

export const campaign_code : Writable<string> = writable("");

export const combatants : Writable<Combatant[]> = writable([]);