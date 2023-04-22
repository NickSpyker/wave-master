<script setup lang="ts">
import { useFileSore } from "@/store/file";

const fileStore = useFileSore();
</script>

<template>
  <SideMenu>
      <div class="files-box">
          <div v-for="path in fileStore.files()" :key="path">
              <FileButton :path="fileStore.getName(path)" />
          </div>
      </div>
  </SideMenu>
</template>

<style scoped>
.files-box {
    padding: 20px 0 0 20px;
    overflow: hidden;
}
</style>
