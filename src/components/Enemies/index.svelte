<script lang="ts">
    import ChevronLeft from "$common/icons/chevron_left.svelte";
    import ChevronRight from "$common/icons/chevron_right.svelte";
	import Enemy from "./Enemy.svelte";
    export let enemies : Combatant[] = [];
    let detailed = false;
    let moving = false;
</script>

<div class="flex items-center pointer-events-auto">
    <div class:overflow-y-hidden={moving} class="max-h-[70vh] overflow-y-auto pl-1 hostile" style="direction: rtl;">
        <div style="direction: ltr;">
            {#each enemies as enemy}
                <Enemy bind:enemy />
            {/each}
        </div>
    </div>
</div>