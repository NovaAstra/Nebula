<script setup lang="ts">
import { LazilyRoot } from "@/components/msp-lazily"
import { GridStackProps } from "./gridstack.type"
import { useGridStack } from "./useGridStack"

defineOptions({
    name: 'MspGridStack'
})

const props = defineProps<GridStackProps>()

useGridStack(props)
</script>

<template>
    <LazilyRoot class="msp-grid-stack grid-stack" ref="gridstack">
        <slot />
    </LazilyRoot>
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