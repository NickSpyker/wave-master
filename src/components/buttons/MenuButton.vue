<script setup lang="ts">
import {defineProps, Ref, ref, onMounted} from "vue";

const props = defineProps<{
    text: string,
    haveDrawer: boolean,
    callBack: () => void
}>();

const openDrawer: Ref<boolean> = ref(false);
const button: Ref<HTMLElement | null> = ref(null);
const drawerPos: Ref<{top: number, left: number}> = ref({top: 0, left: 0});

function setDrawerPos(): void
{
    const bttPos = button.value?.getBoundingClientRect();

    if (bttPos)
    {
        drawerPos.value.left = bttPos.x;
        drawerPos.value.top = bttPos.y + bttPos.height;
    }
}

onMounted(() => button.value?.focus());
</script>

<template>
  <div v-if="props.haveDrawer" class="btt">
      <button ref="button"
        @click="openDrawer = !openDrawer; setDrawerPos()"
      >
          {{ props.text }}
      </button>
      <div v-if="openDrawer" class="drawer"
        :style="drawerPos"
        @mouseleave="openDrawer = !openDrawer"
      >
          <slot />
      </div>
  </div>
  <button v-else class="btt-drawer"
          @click="props.callBack()"
  >
      {{ props.text }}
  </button>
</template>

<style scoped>
button {
    z-index: 1;
    border: none;
    cursor: pointer;
    font-size: 11px;
    margin: 0 0 0 0;
    color: var(--white);
    transition: all 0.25s;
    background: transparent;
    padding: 5px 10px 5px 10px;
    font-family: "Fira Code", sans-serif;
}
.btt:hover {
    background-color: var(--gray700);
    transition: all 0.25s;
}
.btt-drawer:hover {
    background-color: var(--gray500);
    transition: all 0.25s;
}
.drawer {
    z-index: 1;
    display: flex;
    place-items: start;
    position: absolute;
    flex-direction: column;
    box-shadow: 0 0 1px 0 #000000;
    background-color: var(--gray600);
}
</style>
