<script lang="ts">
    import _ from 'lodash';
    import Tips from '$common/Tips/index.svelte';
    import PointsBar from '$common/PointsBar/index.svelte';
    import styles from './styles';
	import { createEventDispatcher } from 'svelte';
    const dispatcher = createEventDispatcher();

    export let pools: CharacterPools;
    export let editable = false;
    const overallMax = Object
        .values(pools)
        .filter(pools => pools)
        .reduce((prev, {max}) => max > prev ? max : prev, 0);
</script>

<div class="flex flex-col text-sm">
    {#each _.entries(_.pickBy(pools, (data) => data && data.max && data.current)) as [k, {max, current}]}
        <div class="my-0.5 flex items-center w-full">
            <PointsBar 
                {editable}
                on:increase={() => dispatcher("increase", k)}
                on:decrease={() => dispatcher("decrease", k)}
                color={_.get(styles, k)}
                relative={(max / overallMax) * 90}
                bind:max={max} 
                bind:current={current} />
            <Tips type={k} />
        </div>
    {/each}
</div>
