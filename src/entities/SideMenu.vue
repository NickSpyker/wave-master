<script setup lang="ts">

</script>

<template>
  <div class="side">
      <div style="position: relative">
          <slot />
      </div>
  </div>
</template>

<style scoped>
.side {
    top: 73px;
    left: 0;
    height: 100%;
    width: 250px;
    position: absolute;
    box-shadow: 0 0 1px #000000;
    background-color: var(--gray800);
}
</style>
