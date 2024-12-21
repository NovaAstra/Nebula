<script lang="ts">
export interface EchartsProps {
}
</script>

<script lang="ts" setup>
defineOptions({
  name: "Echarts"
})

defineProps<EchartsProps>()
</script>

<template>
  <div v-bind="$attrs"></div>
</template>