<script lang="ts">
	import Button from "$common/button.svelte";
    import Custom from "$common/Tips/Custom.svelte";

    export let issue : string | null;
    export let todos : string[] | null;
</script>
{#if issue || (todos && todos.length > 0)}
    <Custom>
        <Button slot="icon" state={issue ? "error" : "warn"} on:click>
            <slot />
        </Button>
        <svelte:fragment>
            {#if issue}
                {issue}
            {:else}
                {todos?.join("; ")}
            {/if}
        </svelte:fragment>
    </Custom>
{:else}
    <Button state={""} on:click>
        <slot />
    </Button>
{/if}