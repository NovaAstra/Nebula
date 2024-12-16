<template>
    <div class="grid-stack">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { PropType } from "vue"
import { GridStackNode } from "gridstack"

defineOptions({
    name: 'MspGridStack',
})

const props = defineProps({
    modelValue: { type: Array as PropType<GridStackNode[]>, default: () => [] as GridStackNode[] },
    static: { type: Boolean, default: () => false },
    float: { type: Boolean, default: () => true },
    column: { type: Number, default: () => 12 },
    animate: { type: Boolean, default: () => true },
    minRow: { type: Number },
    maxRow: { type: Number },
    cellHeight: { type: [Number, String] },
    margin: { type: [Number, String] }
})
</script>

<style lang="scss"></style>