<script lang="ts">
    import Bar from "$common/PointsBar/index.svelte";
    import Renderer from "$common/Renderer/index.svelte";
    import Description from "$common/icons/description.svelte";
    import Tray from "$common/Tray/primitive.svelte";
    import Tip from "$common/Tips/index.svelte";
    export let combatant : Combatant;
    let show = false;
</script>

<button class="flex items-center" on:click={() => show = true}>
    <Description /> Sheet
</button>

{#if show}
    <Tray on:click={() => show = false} classes="!bg-red-400">
        <h2 class="mb-2">{combatant.name}</h2>
        <div class="flex mb-2 items-center">
            <img class="w-32 h-32 mr-2" src={combatant.icon.url} alt={combatant.icon.alt} />
            <div class="grow">
                <Bar bind:current={combatant.health.current} bind:max={combatant.health.max} color="red" />
                <p class="flex items-center my-2">Tier: {combatant.tier} <Tip type="npctier" /> Armour: {combatant.armor}</p>
            </div>
        </div>
        <div class="mb-2">
            <h3>Background</h3>
            <Renderer content={combatant.description} />
        </div>
    </Tray>
{/if}