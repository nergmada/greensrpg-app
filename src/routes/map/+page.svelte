<script lang="ts">
    import ChevronRight from '$common/icons/chevron_right.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<div class="w-screen h-screen flex items-center justify-center text-primary-head">
    <div class="max-w-4xl">
        <h1>Campaign Maps</h1>
        {#each data.maps as map}
            <div class="flex items-center w-full bg-accent text-accent-body p-4 rounded-md">
                <div class="basis-1/4 mr-4">
                    <img src={map.main.url} alt={map.main.alt} />
                </div>
                <div class="basis-3/4">
                    <h2>{map.name}</h2>
                    <p>{map.description.slice(0, 200)}...</p>
                </div>
                <a href="/map/{map.id}">
                    <ChevronRight />
                </a>
            </div>
        {/each}
    </div>
</div>