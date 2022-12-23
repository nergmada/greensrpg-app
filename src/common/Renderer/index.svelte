<script lang="ts">
    import MarkdownIt from "markdown-it";
	import { addGlossaryMarkdown, substituteContent } from "./glossary";
    const md = new MarkdownIt({
        html: true
    });
    export let content : string = "";
    export let skip : string | null = null;
    let container : HTMLDivElement;
    $: if (container && content) setTimeout(() => substituteContent(container), 200);
</script>

<div class="md" bind:this={container}>
    {@html md.render(addGlossaryMarkdown(content, skip))}
</div>

