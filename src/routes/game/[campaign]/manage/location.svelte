<script lang="ts">
    import Map from "$common/Map/index.svelte";
    import Location from "$common/Location/index.svelte";
	import { changeLocation } from "$lib/data/game";

    export let game : GameData;
</script>

<div class="h-screen w-screen items-center justify-center flex absolute top-0 left-0 overflow-hidden pointer-events-none">
    <div class="max-w-6xl rounded-xl border-2 border-secondary pointer-events-auto">
        <Map on:newlocation={(ev) => changeLocation(ev.detail)} map={game.current_map} />
    </div>
</div>
<div class="h-screen w-screen flex items-end justify-center absolute top-0 left-0 pointer-events-none">
    <Location data={game.current_map} location={game.current_location} />
</div>