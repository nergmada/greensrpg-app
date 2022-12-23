<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatcher  = createEventDispatcher();
	import Add from "$common/icons/add.svelte";
	import Subtract from "$common/icons/subtract.svelte";

    export let current: number;
    export let max: number;
    export let relative: number = 100;
    export let color: "red" | "blue" | "yellow" | "green" = "red";
    export let editable = false;
    const {main, shadow} = ({
        red: {
            main: "bg-red-700",
            shadow: "bg-red-700/50"
        },
        blue: {
            main: "bg-blue-700",
            shadow: "bg-blue-700/50"
        },
        yellow: {
            main: "bg-yellow-700",
            shadow: "bg-yellow-700/50"
        },
        green: {
            main: "bg-green-700",
            shadow: "bg-green-700/50"
        }
    })[color]
</script>
<div
    style="width: {relative || 100}%;"
    class="relative rounded-lg text-white {shadow}"
>
    <div
        style="width: {(current / max) * 100}%;" 
        class:rounded-r-lg={current === max}
        class="absolute rounded-l-lg {main}"
    >
        <span class="opacity-0">|</span>
    </div>
    <p 
        class:relative={!editable} 
        class:absolute={editable} 
        class="text-center stroke-black font-medium w-full">
        {current} / {max}
    </p>
    {#if editable}
        <div class="relative flex justify-between w-full">
            <button on:click={() => dispatcher("decrease")}>
                <Subtract />
            </button>
            <button on:click={() => dispatcher("increase")}>
                <Add />
            </button>
        </div>
    {/if}
</div>