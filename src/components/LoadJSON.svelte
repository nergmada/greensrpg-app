<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    const dispatcher = createEventDispatcher();
    import FileDrop from '$common/inputs/FileDrop.svelte';

    let file : File | null = null;
</script>

<div class="flex items-center">
    <div class="mr-2">
        <FileDrop bind:file />
    </div>
    
    <button
        disabled={!file}
        on:click={() => {
            file?.text().then(v => dispatcher('uploaded', JSON.parse(v)))
            file = null;
        }} 
        class="
            p-2
            text-center
            bg-secondary 
            border-accent 
            border-2 
            text-secondary-body 
            text-lg"
    >
        Upload
    </button>
</div>