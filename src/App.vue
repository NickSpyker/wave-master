<script setup lang="ts">
import {useRootSore, Workspace} from "@/store/root";

const root = useRootSore();
</script>

<template>

  <!-- Workspace -->
  <TileSetView      v-if="root.isWorkspace(Workspace.TileSet)" />
  <BitMapView  v-else-if="root.isWorkspace(Workspace.BitMap)"  />
  <PatternView v-else-if="root.isWorkspace(Workspace.Pattern)" />
  <TileMapView v-else-if="root.isWorkspace(Workspace.TileMap)" />

  <!-- Menu -->
  <NavMenu  />
  <MainMenu />

</template>
