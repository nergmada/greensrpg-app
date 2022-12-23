<script lang="ts">
    import { clearSelected, selectedNode, registerListener, generateHash, hasIssue, getTodos } from './tree';
    import Node from './Node.svelte';
	import Button from './Button.svelte';
    export let node: PlayGraphNode;
    export let readOnly: boolean = false;

</script>
{#if node.selected}
    <div class="flex justify-center py-2 border-b-2 border-accent">
        <Button issue={hasIssue(node)} todos={getTodos(node)} on:click={() => {
            node.children = clearSelected(node.children);
            registerListener((v) => node = v);
            $selectedNode = node;
        }}>
            {node.name}
        </Button>
    </div>
    {#if !node.children.some(v => v.selected)}
        <div class="py-2 border-b-2 border-accent overflow-x-auto whitespace-nowrap text-center px-2">
            {#each node.children as child, i}
                <Node on:click={(ev) => {
                        if (ev.ctrlKey) {
                            node.children = node.children.filter((v, j) => j !== i);
                            return;
                        }
                        node.children = node.children.map((v) => ({
                            ...v,
                            selected: false
                        }));
                        registerListener((v) => {
                            node.children[i] = v
                        });
                        $selectedNode = child;
                        node.children[i].selected = true;
                    }} 
                    bind:node={child}
                    bind:readOnly 
                />
            {/each}
            {#if !readOnly}
                <Button issue={null} todos={null} on:click={() => node.children = [...node.children, {
                    hash_id: generateHash(node.children.length),
                    name: "New Node",
                    description: "",
                    selected: false,
                    children: []
                }]}>
                    Add New Branch
                </Button>
            {/if}
        </div>
    {:else}
        {@const index = node.children.findIndex(v => v.selected)}
        <Node
            bind:node={node.children[index]} bind:readOnly />
    {/if}
{:else}
    <Button on:click todos={getTodos(node)} issue={hasIssue(node)}>
        {node.name}
    </Button>
{/if}
