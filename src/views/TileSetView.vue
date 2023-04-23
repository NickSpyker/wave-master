<script setup lang="ts">
import { useFileSore } from "@/store/file";

const fileStore = useFileSore();
</script>

<template>
  <SideMenu>
      <div class="files-box">
          <div v-for="path in fileStore.files()" :key="path">
              <span v-if="fileStore.isLoadedFile(path)">
                 →
              </span>
              <FileButton :path="fileStore.getName(path)" @click="fileStore.loadFile(path)" />
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
</style>
