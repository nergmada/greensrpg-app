<script lang="ts">
    import Cookies from 'js-cookie';
    import PlayerSelect from "$components/PlayerSelect/index.svelte";
    import Renderer from "$common/Renderer/index.svelte";
	import type { PageData } from './$types';
    export let data: PageData;
</script>

<div class="flex">
    <div class="basis-1/2 m-4 p-2 px-4 bg-secondary text-secondary-head rounded-lg">
        <h2>Select Your Character</h2>
        {#each data.game.campaign.players as player}
            <PlayerSelect character={player} on:click={() => {
                Cookies.set("player_id", player.id, {
                    sameSite: "lax",
                });
                window.location.href = `/game/${data.game.id}/tutorial`;
            }} />
        {/each}
    </div>
    <div class="basis-1/2 m-4 p-2 px-4 bg-accent rounded-lg">
        <Renderer content={`## ${data.game.campaign.name}\n${data.game.campaign.description}`} />
    </div>
</div>