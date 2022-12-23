<script lang="ts">
	import ChevronLeft from "$common/icons/chevron_left.svelte";
    import ChevronRight from "$common/icons/chevron_right.svelte";
    import PointsBar from "$common/PointsBar/index.svelte";
	import { addCombatant, combatantHealthChange, removeCombatant } from "$lib/data/game";

    export let game : GameData;
</script>

<div class="flex">
    <div class="basis-1/2">
        <h1 class="text-primary-head">Available</h1>
        <div class="max-h-[90vh] overflow-y-auto px-2">
            {#each game.campaign.combatants as combatant}
                <div class="flex items-center w-full bg-accent text-accent-body p-4 rounded-md my-2">
                    <div class="basis-1/6 mr-4">
                        <img src={combatant.icon.url} alt={combatant.icon.alt} />
                    </div>
                    <div class="basis-3/4">
                        <h2>{combatant.name}</h2>
                        <p>{combatant.description.slice(0, 200)}...</p>
                    </div>
                    <button on:click={() => addCombatant(combatant.id)}>
                        <ChevronRight />
                    </button>
                </div>
            {/each}
        </div>
    </div>
    <div class="basis-1/2 px-2">
        <h1 class="text-primary-head">Active Combatants</h1>
        {#each game.active_combatants as combatant}
            <div class="flex items-center w-full bg-accent text-accent-body p-4 rounded-md my-2">
                <button  on:click={() => removeCombatant(combatant.id)}>
                    <ChevronLeft />
                </button>
                <div class="basis-1/6 mr-4">
                    <img src={combatant.icon.url} alt={combatant.icon.alt} />
                </div>
                <div class="basis-3/4">
                    <h2>{combatant.name}</h2>
                    <PointsBar 
                        on:decrease={() => {
                            combatant.health.current -= 1;
                            combatantHealthChange(combatant.id, combatant.health.current);    
                        }}
                        on:increase={() => {
                            combatant.health.current += 1;
                            combatantHealthChange(combatant.id, combatant.health.current);
                        }}
                        editable={true}
                        current={combatant.health.current}
                        max={combatant.health.max}
                    />
                </div>
            </div>
        {/each}
    </div>
</div>