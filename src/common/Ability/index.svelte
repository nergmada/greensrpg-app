<script lang="ts">
	import Custom from "$common/Tips/Custom.svelte";
    export let ability: AbilityInfo;
</script>
{#if ability.type === 'action'}
    <button class="flex items-center border-b-2 border-b-accent hover:border-b-secondary">
        {ability.name}
        <Custom>{ability.description}</Custom>
    </button>
{:else}
    <p class="flex items-center">
        {ability.name}
        <Custom>{ability.description}</Custom>
    </p>
{/if}