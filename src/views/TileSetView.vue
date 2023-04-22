<script setup lang="ts">
import { useFileSore } from "@/store/file";

const fileStore = useFileSore();
</script>

<template>
  <SideMenu>
      <div class="files-box">
          <p
            v-for="file in fileStore.files()" :key="file"
            style="margin-left: 20px; font-size: 10px"
          >
              {{ fileStore.getName(file) }}
          </p>
      </div>
  </SideMenu>
</template>

<style scoped>
.files-box {
    overflow: hidden;
}
</style>
