<script lang="ts">
    import Dice from "$components/Dice/index.svelte";
    import Map from "$common/Map/index.svelte";
    import Location from "$common/Location/index.svelte";
    import Players from "$components/Players/index.svelte";
    import Player from "$components/Player/index.svelte";
    import Enemies from "$components/Enemies/index.svelte";
	import type { PageData } from "./$types";
	import { gameData, player_id } from "$lib/data/game";
    export let data : PageData;
    $gameData = data.game;
</script>
{#if $gameData}
    {#if $gameData && $gameData.rolling && $gameData.rolling.id}
        <Dice player={$gameData.rolling} />
    {/if}
    <div class="h-screen w-screen items-center justify-center flex absolute top-0 left-0 overflow-hidden">
        <div class="max-w-6xl rounded-xl border-2 border-secondary">
            <Map map={$gameData.current_map} />
        </div>
    </div>

    <div class="h-screen w-screen flex items-end justify-center absolute top-0 left-0 pointer-events-none z-40">
        <Location data={$gameData.current_map} location={$gameData.current_location} />
    </div>
    {#if $player_id}
        {@const player = $gameData.campaign.players.find((player) => player.id == $player_id)}
        {#if player}
            <div class="h-screen w-screen flex items-start justify-center absolute top-0 left-0 pointer-events-none">
                <Player {player} />
            </div>
        {/if}
    {/if}

    <div class="h-screen w-screen flex items-center justify-start absolute top-0 left-0 pointer-events-none">
        <Players players={$gameData.campaign.players} />
    </div>

    <div class="h-screen w-screen flex items-center justify-end absolute top-0 left-0 pointer-events-none">
        <Enemies enemies={$gameData.active_combatants} />
    </div>
{/if}