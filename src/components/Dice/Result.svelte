<script lang="ts">
	import Button from "$common/button.svelte";
	import { diceResult } from "$lib/data/game";
    $: console.log($diceResult);
</script>
{#if $diceResult}
    <div class="w-screen h-screen top-0 left-0 absolute z-40 bg-black/20 flex items-center justify-center">
        <div class="max-w-4xl w-full bg-secondary rounded-md p-4">
            <div class="relative h-96">
                <p class="dice text-center text-[400px] leading-none w-full absolute text-black/5">88</p>
                <p class="dice text-center text-[400px] leading-none w-full absolute text-red-700 brightness-110">{`${$diceResult}`.length === 1 ? '0' : ''}{$diceResult}</p>
            </div>
            <div class="my-4 flex justify-center">
                <Button on:click={() => $diceResult = null}>Close</Button>
            </div>
        </div>
    </div>
{/if}