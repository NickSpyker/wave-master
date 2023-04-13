<script setup lang="ts">
import { useMainMenuStore } from "@/store/main_menu";

const store = useMainMenuStore();
</script>

<template>
  <div :style="{
    left: store.coordX + 'px',
    top:  store.coordY + 'px'
  }"
    @mouseenter="store.mouseInScr()"
    @mouseleave="store.mouseOutScr()"
  >
    <slot />
  </div>
</template>

<style scoped>
div {
    width: 100px;
    position: absolute;
    box-shadow: #000000 0 0 1px;
    background-color: var(--gray700);
}
</style>
