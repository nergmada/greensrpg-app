<script lang="ts">
	import Custom from "$common/Tips/Custom.svelte";

    export let issue : string | null;
    export let todos : string[] | null;
</script>
{#if issue || (todos && todos.length > 0)}
    <Custom classes="w-full">
        <button slot="icon" class="whitespace-nowrap w-full" on:click>
            <div class="
                text-center
                p-4
                {issue ? "bg-red-400" : "bg-yellow-400"} 
                border-accent 
                border-2 
                text-secondary-body 
                text-lg
                w-full"
            >
                <slot />
            </div>
        </button>
        <svelte:fragment>
            {#if issue}
                {issue}
            {:else}
                {todos?.join("; ")}
            {/if}
        </svelte:fragment>
    </Custom>
{:else}
    <button class="whitespace-nowrap w-full" on:click>
        <div class="
            text-center
            p-4
            bg-secondary 
            border-accent 
            border-2 
            text-secondary-body 
            text-lg
            w-full"
        >
            <slot />
        </div>
    </button>
{/if}