<script setup lang="ts">
import { open } from "@tauri-apps/api/dialog";

async function openFileSelection() {
    const file = await open({
        multiple: true,
        filters: [{
            name: "asset",
            extensions: ["pnj", "jpg", "ppm"]
        }]
    });
    if (file === null) return;
}
</script>

<template>
    <ScrollMenuButton>
      new
    </ScrollMenuButton>
    <ScrollMenuButton @click="openFileSelection()">
      open
    </ScrollMenuButton>
    <ScrollMenuButton>
      close
    </ScrollMenuButton>
    <ScrollMenuButton>
      exit
    </ScrollMenuButton>
</template>

<style scoped>

</style>
