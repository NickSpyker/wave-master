<script setup lang="ts">
import {useRootSore, Workspace} from "@/store/root";

const root = useRootSore();
</script>

<template>
  <div>
      <NavButton @click="root.changeWorkspace(Workspace.TileSet)" :is-actual="root.isWorkspace(Workspace.TileSet)">
          TileSet
      </NavButton>
      <NavButton @click="root.changeWorkspace(Workspace.BitMap)"  :is-actual="root.isWorkspace(Workspace.BitMap)">
          BitMap
      </NavButton>
      <NavButton @click="root.changeWorkspace(Workspace.Pattern)" :is-actual="root.isWorkspace(Workspace.Pattern)">
          Pattern
      </NavButton>
      <NavButton @click="root.changeWorkspace(Workspace.TileMap)" :is-actual="root.isWorkspace(Workspace.TileMap)">
          TileMap
      </NavButton>
  </div>
</template>

<style scoped>
div {
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    place-items: center;
    justify-content: center;
    box-shadow: 0 0 1px #000000;
    background-color: var(--gray700);
}
</style>
