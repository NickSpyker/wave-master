<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
    path: string
}>();
</script>

<template>
  <button>
      {{ props.path }}
  </button>
</template>

<style scoped>
button {
    border: none;
    cursor: pointer;
    font-size: 10px;
    margin: 0 0 0 0;
    color: var(--white);
    padding: 5px 0 5px 0;
    background: transparent;
    font-family: "Fira Code", sans-serif;
}
button:hover {
    text-shadow: var(--white) 0 0 5px;
}
</style>
