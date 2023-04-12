<script setup lang="ts">
import {MenuBtt, useMainMenuStore} from "@/store/main_menu";

const store = useMainMenuStore();

const buttons = [
    {name: "File",  type: MenuBtt.File},
    {name: "Edit",  type: MenuBtt.Edit},
    {name: "View",  type: MenuBtt.View},
    {name: "Tools", type: MenuBtt.Tools},
    {name: "Help",  type: MenuBtt.Help},
    {name: "About", type: MenuBtt.About}
];
</script>

<template>
  <div>
    <PrimaryButton class="main-menu-button"
      v-for="btt in buttons" :key="btt"
      @click="store.setStatus(btt.type)"
      @mouseenter="store.mouseInBtt(btt.type)"
      @mouseleave="store.mouseOutBtt(btt.type)"
    >
      {{ btt.name }}
    </PrimaryButton>
  </div>
</template>

<style scoped>
div {
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
    box-shadow: #000000 0 0 1px;
    background-color: var(--gray700);
}
.main-menu-button {
    font-size: 12px;
    padding: 5px 7px 5px 7px;
}
.main-menu-button:hover {
    background-color: var(--gray600);
}
</style>
