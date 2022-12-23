import { glossary as glossaryStore } from "$lib/data/global";
import DefinitionSvelte from "./Definition.svelte";

let glossary: GlossaryEntry[] = [];

glossaryStore.subscribe(g => glossary = g);

export const addGlossaryMarkdown = (content: string, skip : string | null) => {
    let result = content;
    glossary.sort((a, b) => b.phrase.length - a.phrase.length).forEach((entry) => {
        if (skip && skip === entry.hash_id) return;
        const regex = new RegExp(`${entry.phrase}[\\.\\s"']`, "ig");
        result = result.replaceAll(regex, (m) => `<span class="glossary-${entry.hash_id}">${m.slice(0, m.length - 1)}</span>${m.slice(m.length - 1)}`);
        const altRegex = new RegExp(`${entry.phrase}$`, "ig");
        result = result.replaceAll(altRegex, (m) => `<span class="glossary-${entry.hash_id}">${m}</span>`);
    });
    return `${result} `;
};

export const substituteContent = (container : HTMLDivElement) => {
    glossary.forEach((entry) => {
        const matches = container.querySelectorAll(`.glossary-${entry.hash_id}`);
        matches.forEach((elem) => {
            if (elem.parentElement) {
                new DefinitionSvelte({
                    target: elem.parentElement,
                    anchor: elem,
                    props: {
                        entry,
                        text: elem.innerHTML,
                    },
                });
                elem.remove();
            } 
        });
    });
}