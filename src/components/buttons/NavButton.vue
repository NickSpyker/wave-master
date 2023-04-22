<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
    isActual: boolean
}>();
</script>

<template>
  <button :style="{backgroundColor: props.isActual ? 'var(--gray600)' : 'var(--gray700)'}">
      <slot />
  </button>
</template>

<style scoped>
button {
    border: none;
    cursor: pointer;
    font-size: 15px;
    border-radius: 5px;
    color: var(--white);
    transition: all 0.25s;
    margin: 0 10px 0 10px;
    padding: 10px 20px 10px 20px;
    font-family: "Fira Code", sans-serif;
}
button:hover {
    text-shadow: var(--white) 0 0 10px;
}
</style>
