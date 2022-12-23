<script lang="ts">
    import Bar from "$common/PointsBar/index.svelte";
    import Sheet from "./Sheet.svelte";
    export let enemy : Combatant;
</script>

<div 
    class="p-4 bg-red-400 rounded-l-lg mb-2 flex items-center transition-all"
>
    <div class="mr-2 flex flex-col items-center">
        <img src={enemy.icon.url} alt={enemy.icon.alt} class="w-32 h-32" />
        <h3>{enemy.name} ({enemy.tier}) [{enemy.armor}]</h3>
        <Bar bind:current={enemy.health.current} bind:max={enemy.health.max} color="red" />
        <div class="my-1 flex justify-center">
            <Sheet combatant={enemy} />
        </div>
    </div>
</div>