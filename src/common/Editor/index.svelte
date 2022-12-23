<script lang="ts">
    import Title from "./Title.svelte";
	import Body from "./Body.svelte";
	import Render from "./Render.svelte";
    export let node: PlayGraphNode | null;
    export let term: GlossaryEntry | null;
    export let readOnly = false;
</script>
<div
    class:items-center={!node}
    class:justify-center={!node}
    class="flex flex-col h-full w-full grow">
    {#if node || term}
        {#if !readOnly}
            <div class="basis-1/2 w-full flex flex-col overflow-hidden">
                {#if node}
                    <Title bind:title={node.name} />
                    <Body bind:body={node.description} />
                {:else if term}
                    <Title bind:title={term.phrase} />
                    <Body bind:body={term.description} />
                {/if}
            </div>
        {/if}
        <div class="basis-1/2 w-full flex flex-col overflow-hidden">
            {#if node}
                <Render bind:node={node} term={null} />
            {:else if term}
                <Render bind:term={term} node={null} />
            {/if}
        </div>
    {:else}
        <h2>No Node Selected.</h2>
        <p>Please selected a node in order to edit it.</p>
    {/if}
</div>