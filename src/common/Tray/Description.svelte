<script lang="ts">
    import MarkdownIt from 'markdown-it';
    const md = new MarkdownIt();
    import Primitive from "./primitive.svelte";
    export let description: DescriptionData | null;
</script>
{#if description}
    <Primitive on:click={() => description = null}>
        <div class="py-2">
            <h3 class="mb-2">{description.title}</h3>
            {@html md.render(description.body)}
        </div>
    </Primitive>
{/if}