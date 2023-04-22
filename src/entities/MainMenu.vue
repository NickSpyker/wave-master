<script setup lang="ts">

</script>

<template>
  <div>
      <MenuButton :text="'File'" :have-drawer="true">
          <MenuButton text="Open" :have-drawer="false" />
      </MenuButton>
  </div>
</template>

<style scoped>
div {
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--gray800);
}
</style>
