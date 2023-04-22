<script setup lang="ts">

</script>

<template>
  <button>
      <slot />
  </button>
</template>

<style scoped>
button {
    border: none;
    font-size: 11px;
    margin: 0 0 0 0;
    color: var(--white);
    transition: all 0.25s;
    background: transparent;
    padding: 5px 10px 5px 10px;
    font-family: "Fira Code", sans-serif;
}
button:hover {
    background-color: var(--gray700);
}
</style>
