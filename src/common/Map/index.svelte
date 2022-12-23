<script lang="ts">
    import Icon from './Icon.svelte';
    import { mouseHandler } from './store';
	import Zoom from './Zoom.svelte';
    export let map: MapData;
    let mousein = false;
    let img : HTMLImageElement;
    let image_width: number;
    let image_height: number;
    const computeDims = () => {
        const rect = img.getBoundingClientRect();
        image_width = rect.width;
        image_height = rect.height;
        if (image_width === 0 || image_height === 0) {
            setTimeout(computeDims, 100);
        }
    }
    $: if (img) computeDims();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="relative">
    <img 
        class="rounded-xl"
        bind:this={img}
        on:mousemove={mouseHandler}
        on:mouseenter={() => mousein = true}
        on:mouseleave={() => mousein = false}
        src={map.main.url} 
        alt={map.main.alt} />
    {#each map.icons as icon}
        <Icon on:newlocation data={icon} x_ratio={image_width / 1000} y_ratio={image_height / 500} />
    {/each}
</div>

{#if mousein}
    <Zoom 
        bind:mapImage={map.main} 
        bind:viewer_width={image_width}
        bind:viewer_height={image_height} />
{/if}