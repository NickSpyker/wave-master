<script setup lang="ts">

</script>

<template>
  <div class="menu">
      <MenuButton :text="'File'" :have-drawer="true">
          <MenuButton :text="'New'"        :have-drawer="false" />
          <MenuButton :text="'Open'"       :have-drawer="false" />
          <MenuButton :text="'Close All'"  :have-drawer="false" />
          <MenuButton :text="'Exit'"       :have-drawer="false" />
      </MenuButton>
      <MenuButton :text="'Edit'" :have-drawer="true">
          <MenuButton :text="'Undo'"       :have-drawer="false" />
          <MenuButton :text="'Redo'"       :have-drawer="false" />
      </MenuButton>
      <MenuButton :text="'View'" :have-drawer="true">
          <MenuButton :text="'Appearance'" :have-drawer="false" />
      </MenuButton>
      <MenuButton :text="'Help'" :have-drawer="true">
          <MenuButton :text="'About'"      :have-drawer="false" />
      </MenuButton>
  </div>
</template>

<style scoped>
.menu {
    display: flex;
    flex-direction: row;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--gray800);
}
</style>
