<script lang="ts">
    import Info from '$common/icons/info.svelte';
	import Primitive from './primitive.svelte';
    export let classes = "";
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
    <Primitive>
        <p class="w-full">
            <slot />
        </p>
    </Primitive>
{/if}