<script lang="ts">
    export let body: string;
    export let placeholder = "Description";
    let focus = false;
    let content: HTMLDivElement;
    $: if (content && !focus) {
        if (body) content.innerText = body;
        else content.innerText = placeholder;
    }
    $: if (!focus && !body.trim().length) body = placeholder;
</script>

<div
    bind:this={content}
    on:focus={() => {
        focus = true;
        if (body === placeholder) body = "";
    }}
    on:blur={() => focus = false}
    on:keyup={() => body = content?.innerText || placeholder}
    class:text-white={!focus && body === placeholder}
    class="grow overflow-y-auto bg-accent text-accent-head placeholder:text-white p-2 my-2 outline-none rounded-md overflow-y-auto" 
    contenteditable></div>

