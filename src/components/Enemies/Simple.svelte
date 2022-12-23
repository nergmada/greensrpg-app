<script lang="ts">
    export let player : PlayerData;
</script>

<div 
    class="p-4 bg-secondary rounded-r-lg mb-2 flex items-center transition-all"
>
    <div class="mr-2">
        <img src={player.icon.url} alt={player.icon.alt} class="w-32 h-32" />
        <h3>{player.name}</h3>
    </div>
</div>