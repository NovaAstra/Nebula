<script setup lang="ts">
import { GridStack, GridStackWidget } from "@/components/msp-gridstack"
import { reactive } from "vue";

const layout = reactive([
    { x: 0, y: 0, w: 2, h: 2, id: '0', static: false },
    { x: 2, y: 0, w: 2, h: 4, id: '1', static: true },
    { x: 4, y: 0, w: 2, h: 5, id: '2', static: false },
    { x: 6, y: 0, w: 2, h: 3, id: '3', static: false },
    { x: 8, y: 0, w: 2, h: 3, id: '4', static: false },
    { x: 10, y: 0, w: 2, h: 3, id: '5', static: false },
    { x: 0, y: 5, w: 2, h: 5, id: '6', static: false },
    { x: 2, y: 5, w: 2, h: 5, id: '7', static: false },
    { x: 4, y: 5, w: 2, h: 5, id: '8', static: false },
    { x: 6, y: 3, w: 2, h: 4, id: '9', static: true },
    { x: 8, y: 4, w: 2, h: 4, id: '10', static: false },
    { x: 10, y: 4, w: 2, h: 4, id: '11', static: false },
    { x: 0, y: 10, w: 2, h: 5, id: '12', static: false },
    { x: 2, y: 10, w: 2, h: 5, id: '13', static: false },
    { x: 4, y: 8, w: 2, h: 4, id: '14', static: false },
    { x: 6, y: 8, w: 2, h: 4, id: '15', static: false },
    { x: 8, y: 10, w: 2, h: 5, id: '16', static: false },
    { x: 10, y: 4, w: 2, h: 2, id: '17', static: false },
    { x: 0, y: 9, w: 2, h: 3, id: '18', static: false },
    { x: 2, y: 300, w: 2, h: 2, id: '19', static: false },
])
</script>

<template>
    <GridStack>
        <GridStackWidget v-for="item in layout" v-bind="item"></GridStackWidget>
    </GridStack>
</template>