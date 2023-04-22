<script setup lang="ts">
import {defineProps, Ref, ref, onMounted} from "vue";

const props = defineProps<{
    text: string,
    haveDrawer: boolean
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
  <div v-if="props.haveDrawer">
      <button ref="button"
        @click="openDrawer = !openDrawer; setDrawerPos()"
      >
          {{ props.text }}
      </button>
      <div v-if="openDrawer && props.haveDrawer" class="drawer"
        :style="drawerPos"
        @mouseleave="openDrawer = !openDrawer"
      >
          <slot />
      </div>
  </div>
  <button v-else>
      {{ props.text }}
  </button>
</template>

<style scoped>
button {
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
button:hover {
    background-color: var(--gray700);
}
.drawer {
    width: 60px;
    position: absolute;
    box-shadow: 0 0 1px 0 #000000;
    background-color: var(--gray700);
}
</style>
