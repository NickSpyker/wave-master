<script setup lang="ts">
import { exit } from '@tauri-apps/api/process';
import { useFileSore } from "@/store/file";

const file = useFileSore();

const stop = () => exit(0);
</script>

<template>
  <div class="menu">
      <MenuButton :text="'File'" :have-drawer="true" :call-back="() => {}">
          <MenuButton :text="'New'"        :have-drawer="false" :call-back="() => {}"/>
          <MenuButton :text="'Open'"       :have-drawer="false" :call-back="file.openFile"/>
          <MenuButton :text="'Close All'"  :have-drawer="false" :call-back="() => {}"/>
          <MenuButton :text="'Exit'"       :have-drawer="false" :call-back="stop"/>
      </MenuButton>
      <MenuButton :text="'Edit'" :have-drawer="true" :call-back="() => {}">
          <MenuButton :text="'Undo'"       :have-drawer="false" :call-back="() => {}"/>
          <MenuButton :text="'Redo'"       :have-drawer="false" :call-back="() => {}"/>
      </MenuButton>
      <MenuButton :text="'View'" :have-drawer="true" :call-back="() => {}">
          <MenuButton :text="'Appearance'" :have-drawer="false" :call-back="() => {}"/>
      </MenuButton>
      <MenuButton :text="'Help'" :have-drawer="true" :call-back="() => {}">
          <MenuButton :text="'About'"      :have-drawer="false" :call-back="() => {}"/>
      </MenuButton>
  </div>
</template>

<style scoped>
.menu {
    display: flex;
    flex-direction: row;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--gray800);
}
</style>
