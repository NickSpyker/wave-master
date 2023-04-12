<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
    margin: 0;
    border: none;
    padding: 10px;
    font-size: 15px;
    color: var(--white);
    background-color: transparent;
    font-family: "Fira Code", sans-serif;
}
button:hover {
    background-color: var(--gray600);
}
</style>
