<script setup lang="ts">

</script>

<template>
  <div class="side">
      <div style="height: 73px" />
      <div style="position: relative">
          <slot />
      </div>
  </div>
</template>

<style scoped>
.side {
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 250px;
    position: absolute;
    box-shadow: 0 0 1px #000000;
    background-color: var(--gray800);
}
</style>
