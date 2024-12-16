<template>
    <div class="grid-stack" ref="gridstack">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { PropType } from "vue"
import { GridStackNode } from "gridstack"
import { useGridStack } from "./hooks/useGridStack"

defineOptions({
    name: 'MspGridStack'
})

const props = defineProps({
    modelValue: { type: Array as PropType<GridStackNode[]>, default: () => [] as GridStackNode[] },
    static: { type: Boolean, default: () => false },
    float: { type: Boolean, default: () => true },
    column: { type: Number, default: () => 12 },
    showGridBlock: { type: Boolean, default: () => false },
    animate: { type: Boolean, default: () => true },
    minRow: { type: Number },
    maxRow: { type: Number },
    cellHeight: { type: [Number, String] },
    margin: { type: [Number, String] }
})

useGridStack(props)
</script>

<style lang="scss">
@use "variables";

@use 'gridstack/dist/gridstack';
@use 'gridstack/dist/gridstack-extra';
</style>