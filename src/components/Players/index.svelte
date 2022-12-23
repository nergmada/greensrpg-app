<script lang="ts">
    import SlideInOut from "$common/animations/slide_in_out.svelte";
    import ChevronLeft from "$common/icons/chevron_left.svelte";
    import ChevronRight from "$common/icons/chevron_right.svelte";
	import Detailed from './Detailed.svelte';
	import Simple from './Simple.svelte';
    export let players : PlayerData[] = [];
    let detailed = false;
    let moving = false;
</script>

<div class="flex items-center pointer-events-auto">
    <div class:overflow-y-hidden={moving} class="max-h-[70vh] overflow-y-auto pr-1">
        {#each players as player}
            <SlideInOut on:introend={() => moving = false} show={detailed ? "second" : "first"}>
                <Simple slot="first" {player} />
                <Detailed slot="second" {player} />
            </SlideInOut>
        {/each}
    </div>
    <button  class:hidden={moving} class="text-white" on:click={() => {
        detailed = !detailed;
        moving = true;
    }}>
        {#if detailed}
            <ChevronLeft classes="w-12 h-12" />
        {:else}
            <ChevronRight classes="w-12 h-12" />
        {/if}
    </button>
</div>