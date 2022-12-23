<script lang="ts">
	import Description from "$common/icons/description.svelte";
    import Image from "$common/icons/image.svelte";
	import ImageOverlay from "$common/Tray/Image.svelte";
    import Tray from "$common/Tray/Description.svelte";

    export let data : MapData;
    export let location : string = "";
    let showImages = false;
    let showDescription = false;
</script>

<div class="bg-accent text-accent-body w-full max-w-3xl flex items-center justify-between rounded-t-lg px-2 pointer-events-auto">
    <p>17:10</p>
    <div class="text-center my-2">
        <h3 class="border-b-2 border-accent-body">{data.name}</h3>
        <p>{location}</p>
    </div>
    <div class="flex">
        <button class="
            p-2 
            mx-2 
            rounded-md 
            bg-secondary 
            text-secondary-body 
            hover:brightness-125"
            on:click={() => showImages = true}
        >
            <Image />
        </button>
        <button class="
            p-2 
            rounded-md 
            mx-2 
            bg-secondary 
            text-secondary-body 
            hover:brightness-125"
            on:click={() => showDescription = true}
        >
            <Description />
        </button>
    </div>
</div>
{#if showDescription}
    <Tray on:click={() =>showDescription = false} description={{
        title: data.name,
        body: data.description
    }} />
{/if}
<ImageOverlay data={data.images} bind:show={showImages} />