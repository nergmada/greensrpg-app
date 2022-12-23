import jsSHA from "jssha/dist/sha256";
import { type Writable, writable } from "svelte/store";

export const selectedEntry: Writable<GlossaryEntry | null> = writable(null);

let cb = (node: GlossaryEntry) => { node };

export const registerListener = (callback: (x: GlossaryEntry) => void) => {
    cb = callback;
}

export const clearListener = () => cb = (node: GlossaryEntry) => { node };

selectedEntry.subscribe(v => {
    if (v) cb(v);
});

export const hasIssue = (node: GlossaryEntry) : string | null => {
    if (node.phrase === "New Entry") return "The entry's title has not been changed";
    if (node.description === "Description") return "The entry's description has not been changed";
    return null;
} 

export const getTodos = (node : GlossaryEntry) : string[] => {
    const todoRegex = (new RegExp(/TODO:(.*)\n?/g));
    const matches = node.description.matchAll(todoRegex);
    return Array.from(matches, (match) => match[1]);
}

export const generateHash = (index : number) => (new jsSHA("SHA-256", "TEXT"))
    .update(`${index}_${Date.now()}_${Math.random()}`)
    .getHash("HEX").slice(0, 8);