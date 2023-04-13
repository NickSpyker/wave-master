<template>
  <PrimaryButton class="btt">
    <slot />
  </PrimaryButton>
</template>

<style scoped>
.btt {
    text-align: left;
    width: 100%;
    font-size: 12px;
    padding: 5px 7px 5px 7px;
}
.btt:hover {
    background-color: var(--gray600);
}
</style>
