<script>
	import Button from "$common/button.svelte";
    import Text from "$common/inputs/Text.svelte";
    
    export let code = "";
</script>
<div class="flex h-screen w-screen items-center justify-center text-primary-body">
    <div class="max-w-6xl text-center">
        <h1 class="text-primary-body">Green's RPG</h1>
        <p>Please enter a campaign code in the box below to begin. Your GM will give you a game code to join.</p>
        <Text bind:value={code} placeholder="Campaign Code" />
        <Button 
            on:click={() => window.location.href = `/game/${code}/select`}
            state={code ? "" : "disabled"}
        >
            Join Campaign
        </Button>
    </div>
</div>