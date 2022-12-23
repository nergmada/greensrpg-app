<script lang="ts">
    import Renderer from "$common/Renderer/index.svelte";
    import MarkdownIt from "markdown-it";
    const md = new MarkdownIt();
    export let node: PlayGraphNode | null;
    export let term: GlossaryEntry | null;
</script>

<div class="bg-secondary text-secondary-body p-2 rounded-md grow mb-2 overflow-y-auto">
    <Renderer content={`# ${node?.name || term?.phrase}\n${node?.description || term?.description}`} />
</div>