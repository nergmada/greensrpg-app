<script lang="ts">
    import { fly } from "svelte/transition";
    export let show : 'first'|'second' = "first";
    let showing : 'first'|'second'|'to_first'|'to_second' = show;
    $: if (show !== showing) {
        console.log(`Starting transition to ${show}`);
        if (show === 'first') showing = "to_first";
        else showing = "to_second";
    }
</script>

{#if showing === "first"}
    <div
        out:fly={{ x: -300, duration: 400 }} 
        in:fly={{ x: -300, duration: 400 }}
        on:outroend={() => showing = "second"} 
        on:introend
    >
        <slot name="first" />
    </div>
{:else if showing === "second"}
    <div
        out:fly={{ x: -1000, duration: 400 }} 
        in:fly={{ x: -1000, duration: 400 }}
        on:outroend={() => showing = "first"}
        on:introend
    >
        <slot name="second" />
    </div>
{/if}