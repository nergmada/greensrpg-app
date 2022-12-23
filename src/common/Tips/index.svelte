<script lang="ts">
    import _ from 'lodash';
    import tips from "./tips";
    export let type = "healthbar";

    $: tip = _.get(tips, type);
    let show = false;
</script>
{#if tip}
    <div 
        class="inline-block"
        on:mouseenter={() => show = true}
        on:mouseleave={() => show = false}
        on:focus={() => show = true}
        on:blur={() => show = false}
    >
        <svelte:component 
            this={tip.icon} />
    </div>
    {#if show}
        <svelte:component this={tip.component} />
    {/if}
{/if}