<script lang="ts">
	import Button from "$common/button.svelte";
	import { playEffect } from "$lib/data/game";
	export let sound_effects: CMSImageData[];
</script>

<div class="w-screen h-screen absolute top-0 left-0 flex items-center justify-center pointer-events-none">
    <div class="max-w-6xl flex flex-wrap pointer-events-auto max-h-[70vh] overflow-y-auto px-2">
        {#each sound_effects as effect}
            <div class="basis-1/3">
                <Button on:click={() => playEffect(effect.id)}>
                    <h2>{effect.name}</h2>
                </Button>
            </div>
        {/each}
    </div>
</div>