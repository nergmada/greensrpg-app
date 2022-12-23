<script lang="ts">
    import Custom from "$common/Tips/Custom.svelte";
    import Tray from "$common/Tray/primitive.svelte";
    import Renderer from "./index.svelte";
    export let entry : GlossaryEntry;
    export let text : string = "";
    let show = false;
</script>
<Custom>
    <button on:click={() => show = true} slot="icon" class="underline">
        <slot>
            {text}
        </slot>
    </button>
    <svelte:fragment>{entry.description.slice(0, 160)}</svelte:fragment>
</Custom>

{#if show}
    <Tray on:click={() => show = false}>
        <Renderer skip={entry.hash_id} content={`# ${entry.phrase}\n${entry.description}`} />
    </Tray>
{/if}