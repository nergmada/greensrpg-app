<script lang="ts">
    import Ability from '$common/Ability/index.svelte';
    export let abilities: AbilityInfo[];
</script>
<div class="flex w-full">
    <div class="basis-1/2">
        <h3>Actions.</h3>
        {#each abilities.filter(a => a.type === 'action') as ability}
            <Ability bind:ability />
        {/each}
    </div>
    <div class="basis-1/2">
        <h3>Enablers.</h3>
        {#each abilities.filter(a => a.type === 'enabler') as ability}
            <Ability bind:ability />
        {/each}
    </div>
</div>