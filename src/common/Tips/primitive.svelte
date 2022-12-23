<script lang="ts">
    import { onMount } from 'svelte';
    import { x, y, trackMouse } from './store';
    onMount(trackMouse);
</script>

<div 
    style="top: {$y + 5}px; left: {$x + 5}px;"
    class="
        fixed 
        p-2 
        bg-secondary 
        text-secondary-body
        border-secondary-body
        border-2
        text-sm
        max-w-xs
        z-10"
>
    <slot />
</div>