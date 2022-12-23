<script lang="ts">
    export let show = false;
</script>

{#if show}
    <div class="flex items-center justify-center w-screen h-screen absolute top-0 left-0 bg-gray-200/50">
        <div class="bg-accent text-accent-body p-2 max-h-[70vh] overflow-hidden max-w-xl">
            <div class="overflow-y-auto">
                <slot></slot>
            </div>
            <div class="w-full flex justify-center">
                <button on:click={() => show = false}>Close</button>
            </div>
        </div>
    </div>
{/if}