<script lang="ts">
    import PlayerStats from "$common/PlayerStats/index.svelte";
    import Pools from "$common/Pools/index.svelte";
    import Abilities from "$common/Abilities/index.svelte";
    import Renderer from "$common/Renderer/index.svelte";
    import Description from "$common/icons/description.svelte";
    import Tray from "$common/Tray/primitive.svelte";
    export let player : PlayerData;
    let show = false;
</script>

<button class="flex items-center" on:click={() => show = true}>
    <Description /> Sheet
</button>

{#if show}
    <Tray on:click={() => show = false}>
        <h2 class="mb-2">{player.name}</h2>
        <div class="flex mb-2">
            <img class="w-32 h-32" src={player.icon.url} alt={player.icon.alt} />
            <div>
                <Pools pools={player.pools} />
                <PlayerStats playerStats={player.meta} />
            </div>
        </div>
        <div class="mb-2">
            <Abilities abilities={player.abilities} />
        </div>
        <div>
            <h3>Background</h3>
            <Renderer content={player.description} />
        </div>
    </Tray>
{/if}