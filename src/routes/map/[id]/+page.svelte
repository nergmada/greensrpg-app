<script lang="ts">
    import Map from "$common/Map/index.svelte";
    import Location from "$common/Location/index.svelte";
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<div class="h-screen w-screen items-center justify-center flex absolute top-0 left-0 overflow-hidden">
    <div class="max-w-6xl rounded-xl border-2 border-secondary">
        <Map map={data.map} />
    </div>
</div>

<div class="h-screen w-screen flex items-end justify-center absolute top-0 left-0 pointer-events-none">
    <Location data={data.map} />
</div>