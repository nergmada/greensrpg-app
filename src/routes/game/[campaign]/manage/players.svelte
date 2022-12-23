<script lang="ts">
    import Sheet from "$components/Player/Sheet.svelte";
    import Pools from "$common/Pools/index.svelte";
	import { giveDice, playerPoolChange } from "$lib/data/game";
	import Roll from "$common/icons/roll.svelte";
    export let game : GameData;
</script>

<div class="w-screen h-[90vh] flex justify-center items-center">
    <div class="max-w-4xl w-full">
        {#each game.campaign.players as player}
            <div class="bg-accent rounded-md flex w-full my-2 p-2">
                <img class="w-32 h-32" src={player.icon.url} alt={player.icon.alt} />
                <div class="basis-full">
                    <h2 class="w-full">{player.name}</h2>
                    <Pools 
                        pools={player.pools} 
                        editable={true} 
                        on:increase={(ev) => {
                            const pool = ev.detail;
                            player.pools[pool].current += 1;
                            playerPoolChange(player.id, pool, player.pools[pool].current);
                        }}
                        on:decrease={(ev) => {
                            const pool = ev.detail;
                            player.pools[pool].current -= 1;
                            playerPoolChange(player.id, pool, player.pools[pool].current);
                        }} />
                    <div class="flex">
                        <Sheet {player} />
                        <button class="flex ml-2" on:click={() => giveDice(player.id)}>
                            <Roll />
                            Give Dice
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>