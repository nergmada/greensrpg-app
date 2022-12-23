<script lang="ts">
    import Info from '$common/icons/info.svelte';
    export let classes = "";
    export let x = 0;
    export let y = 0;
    let show = false;
</script>
<div 
    class="inline-block {classes}"
    on:mouseenter={() => show = true}
    on:mouseleave={() => show = false}
    on:focus={() => show = true}
    on:blur={() => show = false}
>
    <slot name="icon">
        <Info />
    </slot>
</div>
{#if show}
    <div 
        style="top: {y + 5}px; left: {x + 5}px;"
        class="
            absolute 
            p-2 
            bg-secondary 
            text-secondary-body
            border-secondary-body
            border-2
            text-sm
            max-w-xs
            z-10"
    >
        <p class="w-full">
            <slot />
        </p>
    </div>
{/if}