<script lang="ts">
    import ChevronRight from '$common/icons/chevron_right.svelte';
    import type { PageData } from './$types';
    import { post } from '$lib/utils/cmsPost';

    export let data: PageData;
</script>


<div class="w-screen h-screen flex items-center justify-center text-primary-head">
    <div class="max-w-4xl">
        <h1>Campaigns</h1>
        <div class="max-h-[60vh] overflow-y-auto px-2">
            {#each data.campaigns as campaign}
                <div class="flex items-center w-full bg-accent text-accent-body p-4 rounded-md my-2">
                    <div>
                        <h2>{campaign.name}</h2>
                        <p>{campaign.description.slice(0, 200)}</p>
                    </div>
                    <button on:click={() => post('/api/game/{id}', '', {
                        id: campaign.id
                    }).then(r => r ? window.location.href = `/game/${r.id}/manage` : null)}>
                        <ChevronRight />
                    </button>
                </div>
            {/each}
        </div>
    </div>
</div>
