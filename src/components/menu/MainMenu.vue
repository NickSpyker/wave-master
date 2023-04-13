<script setup lang="ts">
import { MenuBtt } from "@/store/main_menu";
</script>

<template>
  <div class="main-menu">
    <MainMenuButton :e="MenuBtt.File"  />
    <MainMenuButton :e="MenuBtt.Edit"  />
    <MainMenuButton :e="MenuBtt.View"  />
    <MainMenuButton :e="MenuBtt.Tools" />
    <MainMenuButton :e="MenuBtt.Help"  />
    <MainMenuButton :e="MenuBtt.About" />
  </div>
</template>

<style scoped>
.main-menu {
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
    box-shadow: #000000 0 0 1px;
    background-color: var(--gray700);
}
</style>
