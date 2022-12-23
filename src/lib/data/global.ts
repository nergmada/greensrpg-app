import { writable, type Writable } from 'svelte/store';
import defaultGlossary from './glossary.json';

export const glossary: Writable<GlossaryEntry[]> = writable(defaultGlossary);
