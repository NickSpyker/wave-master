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
      New
    </ScrollMenuButton>
    <ScrollMenuButton @click="openFileSelection()">
      Open
    </ScrollMenuButton>
    <ScrollMenuButton>
      Close
    </ScrollMenuButton>
    <ScrollMenuButton>
      Exit
    </ScrollMenuButton>
</template>

<style scoped>

</style>
