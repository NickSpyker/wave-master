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
    cursor: pointer;
    font-size: 15px;
    border-radius: 5px;
    color: var(--white);
    transition: all 0.25s;
    margin: 0 10px 0 10px;
    background: transparent;
    padding: 10px 20px 10px 20px;
    font-family: "Fira Code", sans-serif;
}
button:hover {
    text-shadow: var(--white) 0 0 10px;
}
</style>
