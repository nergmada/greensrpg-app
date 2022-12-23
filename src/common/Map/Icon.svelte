<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatcher = createEventDispatcher();
	import Custom from "$common/Tips/CustomPos.svelte";
	import { image_x, image_y } from "./store";

    export let data : MapIconData;
    export let x_ratio : number;
    export let y_ratio : number;
</script>

<div
    class="absolute" 
    style="left: {data.x * x_ratio}px; top: {data.y * y_ratio}px;"
>
    <Custom 
        x={40}
        y={40}
        classes="visible">
        <button slot="icon" on:click={() => dispatcher('newlocation', data.description.title)}>
            <img 
                class="w-12 h-12 rounded-full border-accent border-2"
                src={data.icon.url}
                alt={data.icon.alt} />
        </button>
        <p>{data.description.title}</p>
    </Custom>
</div>