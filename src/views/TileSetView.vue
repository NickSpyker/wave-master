<script setup lang="ts">
import { useImageSore } from "@/store/image";
import { useFileSore } from "@/store/file";

const imageStore = useImageSore();
const fileStore = useFileSore();
</script>

<template>
  <div class="workspace">
      <ImageDisplayer />
  </div>
  <SideMenu>
      <div class="files-box">
          <div v-for="path in fileStore.files()" :key="path">
              <span v-if="fileStore.isLoadedFile(path)">
                 →
              </span>
              <FileButton :path="fileStore.getName(path)"
                @click="fileStore.loadFile(path); imageStore.loadImage(path);"
              />
          </div>
      </div>
  </SideMenu>
</template>

<style scoped>
.files-box {
    overflow: hidden;
    padding: 20px 0 0 20px;
    width: calc(100% - 20px);
}
.workspace {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    place-items: center;
    justify-content: center;
}
</style>
