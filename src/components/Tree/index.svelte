<script lang="ts">
    import _ from 'lodash';
    import Editor from '$common/Editor/index.svelte';

    import Node from "./Node.svelte";
    import {selectedNode, root as rootStore, generateHash, hasIssue} from './tree';
	import Button from './Button.svelte';
    export let root: PlayGraphNode | null;
    export let readOnly: boolean = false;

    if (root) $rootStore = {
        ...root,
        selected: true,
    };
    rootStore.subscribe((v) => root = v);
</script>

<div class="flex w-full h-screen">
    <div class="overflow-hidden overflow-y-auto basis-1/2">
        {#if $rootStore}
            <Node bind:node={$rootStore} bind:readOnly />
        {:else}
            <Button todos={null} issue={root && hasIssue(root)} on:click={() => root = {
                hash_id: generateHash(0),
                name: "Game Start",
                description: "",
                selected: true,
                children: []
            }}>
                Start New Tree
            </Button>
        {/if}
    </div>
    <div class="basis-1/2 border-l-2 border-accent px-2">
        {#if !readOnly}
            <div class="flex justify-center">
                <button on:click={() => {
                    if ($selectedNode) navigator.clipboard.writeText(`[${$selectedNode.name}](#goto_${$selectedNode.hash_id})`);
                }} class="text-secondary font-medium">Copy current path as command</button>
            </div>
        {/if}
        <Editor bind:node={$selectedNode} term={null} bind:readOnly />
    </div>
</div>