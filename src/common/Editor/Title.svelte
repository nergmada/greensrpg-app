<script lang="ts">
    export let title: string;
</script>

<input
    class="w-full text-lg grow-0 bg-accent text-accent-head placeholder:text-white p-2 my-2 outline-none rounded-md"
    bind:value={title} 
    placeholder="Node Name" />