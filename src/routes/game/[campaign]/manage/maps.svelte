<script lang="ts">
	import Button from "$common/button.svelte";
	import { changeMap } from "$lib/data/game";

    export let game : GameData;
</script>

<div class="w-screen h-screen absolute top-0 left-0 flex items-center justify-center pointer-events-none">
    <div class="max-w-6xl flex flex-wrap pointer-events-auto max-h-[70vh] overflow-y-auto px-2">
        {#each game.campaign.maps as map}
            <div class="basis-1/3">
                <Button on:click={() => changeMap(map.id)}>
                    <img src={map.main.url} alt={map.main.alt} />
                    <h2>{map.name}</h2>
                </Button>
            </div>
        {/each}
    </div>
</div>