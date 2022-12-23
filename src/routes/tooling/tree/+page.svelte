<script lang="ts">
	import LoadJson from '$components/LoadJSON.svelte';
    import SaveJson from '$components/SaveJSON.svelte';
    import Tree from '$components/Tree/index.svelte';
    let root: PlayGraphNode = {
        hash_id: "",
        name: "Game Start",
        description: "",
        children: [],
        selected: false
    }
    let key = 0;
</script>
<div class="flex border-b-2 border-b-accent p-2">
    <div class="mr-2">
        <SaveJson bind:root />
    </div>
    <LoadJson on:uploaded={(ev) => {
        root = ev.detail;
        key = key + 1;
    }} />
</div>
{#key key}
    <Tree bind:root readOnly={false} />
{/key}