<script lang="ts">
    import {mouse_x, mouse_y, image_x, image_y} from './store';
    export let mapImage : CMSImageData;
    export let viewer_height = 0;
    export let viewer_width = 0;
    $: console.log(viewer_height);
    $: console.log(viewer_width);
</script>
{#if viewer_width && viewer_height}
    <div 
        class="absolute z-40"
        style="top: {$mouse_y + 40}px; left: {$mouse_x + 40}px;"
    >
        <div class="relative overflow-hidden w-32 h-32 border-pink-600 border-2 rounded-full">
            <img 
                width={viewer_width}
                height={viewer_height}
                style="top: -{($image_y * 1.5) - 64}px; left: -{($image_x * 1.5) - 64}px;" 
                class="absolute origin-top-left scale-150 max-w-none"
                src={mapImage.url} 
                alt={mapImage.alt} />
        </div>
    </div>
{/if}