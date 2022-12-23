<script lang="ts">
    import Dice from "$components/Dice/index.svelte";
	import Button from '$common/button.svelte';
    import LoadJson from '$components/LoadJSON.svelte';
    import Tree from "$components/Tree/index.svelte";
    import { gameData } from '$lib/data/game';
    import type { PageData } from './$types';
	import Combatants from './combatants.svelte';
	import Location from './location.svelte';
	import Maps from './maps.svelte';
	import Players from './players.svelte';

    import { mute } from "$lib/data/sounds";
	import Sounds from "./sounds.svelte";

    export let data: PageData;
    $gameData = data.game;

    let tab : 'tree' | 'combatants' | 'players' | 'location' | 'maps' | 'sounds' = 'tree';
    let tree : PlayGraphNode | null = null;
    let key = 0;
</script>

{#if $gameData && $gameData.rolling && $gameData.rolling.id}
    <Dice player={$gameData.rolling} />
{/if}

{#if $gameData}
    <div class="flex justify-between px-4">
        <LoadJson on:uploaded={(ev) => {
            tree = ev.detail;
            key = key + 1;
        }} />
        <div>
            <Button on:click={() => tab = 'tree'}>Tree</Button>
            <Button on:click={() => tab = 'combatants'}>Combatants</Button>
            <Button on:click={() => tab = 'players'}>Players</Button>
            <Button on:click={() => tab = 'location'}>Location</Button>
            <Button on:click={() => tab = 'maps'}>Maps</Button>
            <Button on:click={() => tab = 'sounds'}>Sounds</Button>
        </div>
        <div>

        </div>
    </div>
    {#if tab === 'tree'}
        {#if tree}
            {#key key}
                <Tree root={tree} readOnly={true} />
            {/key}
        {/if}
    {:else if tab === 'combatants'}
        <Combatants game={$gameData} />
    {:else if tab === 'location'}
        <Location game={$gameData} />
    {:else if tab === 'players'}
        <Players game={$gameData} />
    {:else if tab === 'maps'}
        <Maps game={$gameData} />
    {:else if tab === 'sounds'}
        <Sounds sound_effects={$gameData.campaign.playlist.sound_effects} />
    {/if}
{:else}
    <h2>Could not load game</h2>
{/if}