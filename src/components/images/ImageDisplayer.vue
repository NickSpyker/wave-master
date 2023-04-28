<script setup lang="ts">
import { useFileSore } from "@/store/file";

const file = useFileSore();
</script>

<template>
  <img :src="file.getLoadedFile()" alt="" >
</template>

<style scoped>
img {
}
img[alt] {
    font-size: 15px;
    color: var(--white);
    font-family: "Fira Code", sans-serif;
}
</style>
