<script lang="ts">
    import { fly } from 'svelte/transition';
	import ChevronDown from "$common/icons/chevron_down.svelte";
    
    export let noOverlay = false;
    export let classes = "";
    
    let tray: HTMLDivElement;
    let screenHeight = 0;
</script>
<svelte:body bind:clientHeight={screenHeight} />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class:!bg-transparent={noOverlay}
    class:pointer-events-none={noOverlay}
    class:pointer-events-auto={!noOverlay}
    on:click 
    class="
        fixed 
        w-screen 
        h-screen 
        bg-black/50 
        z-30 
        top-0 
        left-0 
        flex 
        justify-center 
        items-end"
>
    <div 
        class:pointer-events-auto={noOverlay}
        bind:this={tray}
        transition:fly={{
            x: 0,
            y: screenHeight + tray.offsetHeight,
            opacity: 1
        }}
        on:click={(e) => e.cancelBubble = true} 
        class="
            w-full 
            max-w-3xl 
            max-h-[80%] 
            bg-secondary 
            relative 
            pt-2
            px-6 
            rounded-t-xl
            flex
            flex-col
            overflow-hidden
            {classes}"
    >
        <div class="flex justify-center">
            <button on:click>
                <ChevronDown />
            </button>
        </div>
        <slot />
    </div>
</div>