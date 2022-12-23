<script lang="ts">
    import Encyclopedia from "$components/Encyclopedia/index.svelte";
	import LoadJson from "$components/LoadJSON.svelte";
	import SaveJson from "$components/SaveJSON.svelte";
    let glossary : GlossaryEntry[] = [];
</script>

<div class="flex border-b-2 border-b-accent p-2">
    <div class="mr-2">
        <SaveJson prefix="glossary" bind:root={glossary} />
    </div>
    <LoadJson on:uploaded={(ev) => {
        glossary = ev.detail;
    }} />
</div>
<Encyclopedia bind:glossary />
