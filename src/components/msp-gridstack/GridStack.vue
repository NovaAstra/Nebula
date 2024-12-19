<script setup lang="ts">
import { GridStackProps } from "./gridstack.type"
import { useGridStack } from "./useGridStack"

defineOptions({
    name: 'MspGridStack'
})

const props = defineProps<GridStackProps>()

useGridStack(props)
</script>

<template>
    <div class="msp-grid-stack grid-stack" ref="gridstack">
        <slot />
    </div>
</template>

<style lang="scss">
@use "variables";
@use "gridstack";

.msp-grid-stack {
    display: block;
    position: relative;
    background-color: #f5f5f5;
    content-visibility: auto
}
</style>