<script lang="ts">
    import Primitive from "./primitive.svelte";
    export let object: any | null;
</script>
{#if object}
    <Primitive on:click={() => object = null}>
        <div class="bg-gray-100 overflow-y-auto">
            <pre>{JSON.stringify(object, null, 4)}</pre>
        </div>
    </Primitive>
{/if}