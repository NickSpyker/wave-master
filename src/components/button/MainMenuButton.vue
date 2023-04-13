<script setup lang="ts">
import {MenuBtt, useMainMenuStore} from "@/store/main_menu";
import {defineProps, onMounted, ref, Ref} from "vue";

const props = defineProps<{
    e: MenuBtt
}>();

const store = useMainMenuStore();

const btt: Ref<HTMLElement | null> = ref(null);

function getRect()
{
    return btt.value?.getBoundingClientRect();
}

onMounted(() => btt.value?.focus());
</script>

<template>
  <span ref="btt">
    <PrimaryButton class="menu-btt"
      @click="store.setStatus(props.e, getRect())"
      @mouseenter="store.mouseInBtt(props.e)"
      @mouseleave="store.mouseOutBtt()"
    >
      {{ props.e }}
    </PrimaryButton>
  </span>
</template>

<style scoped>
.menu-btt {
    font-size: 12px;
    padding: 5px 7px 5px 7px;
}
.menu-btt:hover {
    background-color: var(--gray600);
}
</style>
