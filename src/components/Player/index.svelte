<script lang="ts">
    import PlayerStats from "$common/PlayerStats/index.svelte";
    import Pools from "$common/Pools/index.svelte";
	import Sheet from "./Sheet.svelte";
    export let player : PlayerData;
</script>
<div class="flex items-center flex-col">
    <div
        class="p-4 bg-secondary rounded-b-lg mb-2 flex items-center transition-all pointer-events-auto"
    >
        <div class="mr-2 flex flex-col justify-center items-center">
            <img src={player.icon.url} alt={player.icon.alt} class="w-32 h-32" />
            <Sheet {player} />
        </div>
        <div>
            <h3>{player.name}</h3>
            <Pools pools={player.pools} />
            <PlayerStats playerStats={player.meta} />
        </div>
    </div>
</div>