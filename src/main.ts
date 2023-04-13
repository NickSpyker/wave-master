import { createApp } from "vue";
import { createPinia } from "pinia";

import "@/assets/main.css";

import App from "@/App.vue";
const app = createApp(App);

app.use(createPinia());

import MainMenu from "@/components/menu/MainMenu.vue";
import NavMenu from "@/components/menu/NavMenu.vue";
import ScrollMenu from "@/components/menu/ScrollMenu.vue";
app.component("MainMenu", MainMenu);
app.component("NavMenu", NavMenu);
app.component("ScrollMenu", ScrollMenu);

import HorTile from "@/components/tile/HorTile.vue";
import VerTile from "@/components/tile/VerTile.vue";
app.component("HorTile", HorTile);
app.component("VerTile", VerTile);

import PrimaryButton from "@/components/button/PrimaryButton.vue";
import MainMenuButton from "@/components/button/MainMenuButton.vue";
app.component("PrimaryButton", PrimaryButton);
app.component("MainMenuButton", MainMenuButton);

app.mount("#app");
