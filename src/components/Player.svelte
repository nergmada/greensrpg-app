<script lang="ts">
    import PlayerStats from '$common/PlayerStats/index.svelte';
    import Pools from '$common/Pools/index.svelte';
    import Abilities from '$common/Abilities/index.svelte';
	import Description from '$common/Tray/Description.svelte';
	import MagnifyingGlass from '$common/icons/magnifying_glass.svelte';
    export let player: PlayerData;
    let more = false;
    let description: DescriptionData | null = null;
</script>

<Description bind:description />

<div class="
    bg-primary 
    text-primary-body
    w-full
    p-2 
    border-2 
    border-primary-body
    rounded-lg"
>
    <h3 class="flex items-center">
        {player.name}
        <button class="bg-accent p-2 rounded-lg ml-4 text-accent-body hover:scale-110" on:click={() => description = {
            title: `${player.name} Description`,
            body: player.description
        }}>
            <MagnifyingGlass />
        </button>
    </h3>
    <PlayerStats bind:playerStats={player.meta} />
    <Pools bind:pools={player.pools} />
    {#if more}
        <Abilities bind:abilities={player.abilities} />
    {/if}
    <div class="flex w-full justify-center">
        <button class="bg-accent p-2 rounded-lg text-accent-body hover:underline hover:scale-110" on:click={() => more = !more}>
            {#if more}
                Hide.
            {:else}
                Show More.
            {/if}
        </button>
    </div>
</div>