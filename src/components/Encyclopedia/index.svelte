<script lang="ts">
	import Button from "./Button.svelte";
    import Editor from "$common/Editor/index.svelte";
	import { clearListener, generateHash, getTodos, hasIssue, registerListener, selectedEntry } from "./term";

    export let glossary : GlossaryEntry[] = [{
        hash_id: "abc312cd",
        phrase: "Hypercane",
        description: "A hypercane is a weather front"
    }, {
        hash_id: "cdbe321b",
        phrase: "Delta Quadrant",
        description: "Just a blank description"
    }];

    $: {
        clearListener();
        glossary = glossary.sort((a, b) => a.phrase.localeCompare(b.phrase));
    } 
</script>

<div class="flex w-full h-screen">
    <div class="basis-1/3">
        <h2 class="p-2 text-primary-body">Glossary Entries:</h2>
        {#each glossary as entry, i}
            <Button issue={hasIssue(entry)} todos={getTodos(entry)} on:click={(ev) => {
                if (ev.ctrlKey) {
                    glossary = glossary.filter((v, j) => j !== i);
                    return;
                }
                registerListener(e => glossary[i] = e);
                $selectedEntry = entry;
            }}>{entry.phrase}</Button>
        {/each}
        <Button issue={null} todos={null} on:click={() => {
            glossary = [...glossary, {
                hash_id: generateHash(glossary.length),
                phrase: "New Entry",
                description: "Description"
            }]
        }}>
            Add New Defintion
        </Button>
    </div>
    <div class="basis-2/3 px-2">
        <Editor bind:term={$selectedEntry} node={null} />
    </div>
</div>