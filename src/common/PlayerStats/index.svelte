<script lang="ts">
    import Tips from '$common/Tips/index.svelte';
    export let playerStats: PlayerStats; 
</script>

<div class="flex">
    <p class="flex items-center">Type: {playerStats.type} <Tips type={playerStats.type} /></p>
    <p class="flex items-center ml-4">
        Edge: {playerStats.edge.might} Might, {playerStats.edge.intellect} Intellect, {playerStats.edge.speed} Speed
        <Tips type="edge" />
    </p>
    <p class="flex items-center ml-4">Effort: {playerStats.effort} <Tips type="effort" /></p>
    <p class="flex items-center ml-4">Tier: {playerStats.tier} <Tips type="tier" /></p>
</div>
