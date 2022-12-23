<script lang="ts">
    export let file: File | null;
</script>
<div
    on:drop={(ev) => {
        ev.preventDefault();
        if (!ev.dataTransfer) return;
        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            [...ev.dataTransfer.items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                if (item.kind === 'file') {
                    file = item.getAsFile();
                }
            });
        } else {
            // Use DataTransfer interface to access the file(s)
            [...ev.dataTransfer.files].forEach((f, i) => {
                file = f;
            });
        }
    }}
    on:dragover={(ev) => ev.preventDefault()}
    class="w-full text-lg grow-0 bg-accent text-accent-head placeholder:text-white p-2 my-2 outline-none rounded-md"
>
    <p>{file?.name || "Drop File Here"}</p>
</div>