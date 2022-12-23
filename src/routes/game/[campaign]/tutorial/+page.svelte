<script lang="ts">
    import Button from "$common/button.svelte";
    import Renderer from "$common/Renderer/index.svelte";
	import type { PageData } from "./$types";
    export let data : PageData;
    let currentSlide = 0;
</script>

<div class="w-screen h-screen flex flex-col items-center justify-center">
    <div class="bg-secondary max-w-6xl text-center !text-secondary-head p-2 my-2 rounded-md w-full">
        <h1>{data.tutorial.slides[currentSlide].title}</h1>
        <div class="!text-secondary-body !text-lg">
            <Renderer content={data.tutorial.slides[currentSlide].body} />
        </div>
    </div>
    <div class="flex">
        {#if currentSlide > 0}
            <Button on:click={() => currentSlide = currentSlide - 1}>
                Previous
            </Button>
        {/if}
        {#if currentSlide < data.tutorial.slides.length - 1}
            <Button on:click={() => currentSlide = currentSlide + 1}>
                Next
            </Button>
        {/if}
        {#if currentSlide === data.tutorial.slides.length - 1}
            <Button on:click={() => window.location.href = `/game/${data.game.id}/play`}>
                Play
            </Button>
        {/if}
    </div>
</div>