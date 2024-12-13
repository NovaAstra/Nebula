<template>
  <button class="lib-custom-button" @click="onDemo">{{ label }}</button>
  <div>Total: {{ total }}</div>
  <div v-if="total === 6">Test</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

export interface MyButtonProps {
  label: string;
}

withDefaults(defineProps<MyButtonProps>(), {
  label: "默认按钮",
});

const total = ref(0)

const onDemo = () => {
  total.value += 1
}
</script>