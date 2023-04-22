<script setup lang="ts">

</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style scoped>
div {
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 200px;
    position: absolute;
    box-shadow: 0 0 1px #000000;
    background-color: var(--gray800);
}
</style>
