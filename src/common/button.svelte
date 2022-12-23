<script lang="ts">
    export let state : 'disabled'|'warn'|'error'|'' = '';
</script>
<button 
    class:bg-secondary={state === ""}
    class:bg-red-400={state === 'error'}
    class:bg-yellow-400={state === 'warn'}
    disabled={state === 'disabled'} 
    class="
        whitespace-nowrap 
        disabled:bg-gray-400
        text-center
        p-4
        border-accent 
        disabled:border-gray-600
        border-2 
        hover:brightness-125
        text-secondary-body 
        text-lg" 
    on:click
>
    <slot />
</button>