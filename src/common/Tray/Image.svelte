<script lang="ts">
    import { fade } from 'svelte/transition';
    import Renderer from "$common/Renderer/index.svelte";
	import ChevronRight from "$common/icons/chevron_right.svelte";
	import ChevronLeft from "$common/icons/chevron_left.svelte";
	import Primitive from "./primitive.svelte";
	export let data : CMSImageData[] = [];
    export let show = false;
    let current = 0;
</script>


{#if show && data.length > 0}
    <div class="flex items-center justify-center w-screen h-screen bg-black/50 absolute top-0 left-0 overflow-hidden">
        <div class="flex justify-between w-full pointer-events-auto">
            <button 
                disabled={current === 0}
                on:click={() => current = current - 1} 
                class="text-white disabled:text-gray-500 enabled:hover:scale-125"
            >
                <ChevronLeft classes="w-12 h-12" />
            </button>
            <img transition:fade class="max-w-4xl rounded-lg" src={data[current].url} alt={data[current].alt} />
            <button
                disabled={current === data.length - 1} 
                on:click={() => current = current + 1} 
                class="text-white disabled:text-gray-500 enabled:hover:scale-125"
            >
                <ChevronRight classes="w-12 h-12" />
            </button>
        </div>
    </div>
    <Primitive noOverlay={true} on:click={() => show = false}>
        <div class="py-2">
            <h3 class="mb-2">{data[current].alt || 'Image'}</h3>
            <Renderer content={data[current].caption} />
        </div>
    </Primitive>
{/if}





