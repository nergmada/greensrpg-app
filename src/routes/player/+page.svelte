<script lang="ts">
    import Sheet from '$components/Player/Sheet.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<div class="w-screen h-screen flex items-center justify-center text-primary-head">
    <div class="max-w-4xl">
        <h1>Players</h1>
        <div class="max-h-[60vh] overflow-y-auto px-2">
            {#each data.players as player}
                <div class="flex items-center w-full bg-accent text-accent-body p-4 rounded-md my-2">
                    <div class="basis-1/6 mr-4">
                        <img src={player.icon.url} alt={player.icon.alt} />
                    </div>
                    <div class="basis-3/4">
                        <h2>{player.name}</h2>
                        <p>{player.description.slice(0, 200)}...</p>
                        <Sheet {player} />
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>