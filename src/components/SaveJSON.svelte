<script lang="ts">
    import Text from '$common/inputs/Text.svelte';
    export let root: any = {};
    export let prefix: string = "game";
    let filename = "";
    let date = new Date();
    $: default_name = `${prefix}_${date.getDate()}_${date.getMonth()}_${date.getHours()}_${date.getMinutes()}`;
    setInterval(() => date = new Date(), 60000);
    $: data = JSON.stringify(root, null, 4);
</script>

<div class="flex items-center">
    <Text bind:value={filename} placeholder="File Name" />
    <a 
        class="ml-2"
        href="data:text/json;charset=utf-8,{encodeURIComponent(data)}" 
        download="{filename || default_name}.json"
    >
        <p
            class="
                text-center
                p-2
                bg-secondary 
                border-accent 
                border-2 
                text-secondary-body 
                text-lg"
        >
            Download
        </p>
    </a>
</div>