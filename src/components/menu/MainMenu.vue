<script setup lang="ts">

</script>

<template>
  <div>
    <PrimaryButton class="main-menu-button">
      File
    </PrimaryButton>
    <PrimaryButton class="main-menu-button">
      Edit
    </PrimaryButton>
    <PrimaryButton class="main-menu-button">
      View
    </PrimaryButton>
    <PrimaryButton class="main-menu-button">
      Tools
    </PrimaryButton>
    <PrimaryButton class="main-menu-button">
      Help
    </PrimaryButton>
    <PrimaryButton class="main-menu-button">
      About
    </PrimaryButton>
  </div>
</template>

<style scoped>
div {
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
    box-shadow: #000000 0 0 1px;
    background-color: var(--gray700);
}
.main-menu-button {
    font-size: 12px;
    padding: 5px 7px 5px 7px;
}
</style>
