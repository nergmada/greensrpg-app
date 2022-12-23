<script lang="ts">
	import Button from "$common/button.svelte";
	import { player_id, rollDice } from "$lib/data/game";

    export let player: PlayerData;
    let displayValue = "00";

    setInterval(() => {
        displayValue = `${Math.floor(Math.random() * 20) + 1}`;
    }, 100);
</script>

<div class="w-screen h-screen top-0 left-0 absolute z-40 bg-black/20 flex items-center justify-center">
    <div class="max-w-4xl w-full bg-secondary rounded-md p-4">
        <p class="text-center w-full">{player.name} is rolling the dice</p>
        <div class="relative h-96">
            <p class="dice text-center text-[400px] leading-none w-full absolute text-black/5">88</p>
            <p class="dice text-center text-[400px] leading-none w-full absolute text-red-700 brightness-110">{displayValue.length === 1 ? '0' : ''}{displayValue}</p>
        </div>
        <div class="my-4 flex justify-center">
            {#if $player_id == player.id}
                <Button on:click={() => rollDice()}>Roll</Button>
            {/if}
        </div>
    </div>
</div>