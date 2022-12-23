<script lang="ts">
    import ChevronRight from "$common/icons/chevron_right.svelte";
    export let character : PlayerData;
</script>

<button class="w-full text-left hover:brightness-75 bg-secondary rounded-lg mb-4 py-2" on:click>
    <div class="flex items-center w-full">
        <div class="basis-1/4">
            <img class="w-64 h-64" src={character.icon.url} alt={character.name} />
        </div>
        <div class="basis-3/4">
            <h3>{character.name}</h3>
            <p>{character.description.slice(0, 200)}...</p>
        </div>
        <ChevronRight />
    </div>
</button>