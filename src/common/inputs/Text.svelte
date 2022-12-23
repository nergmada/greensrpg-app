<script lang="ts">
    export let placeholder: string;
    export let value: string;
</script>

<input
    class="w-full text-lg grow-0 bg-accent text-accent-head placeholder:text-accent-head/90 p-2 my-2 outline-none rounded-md"
    bind:value={value} 
    placeholder={placeholder} />