import {createApp} from "vue";
import {createPinia} from "pinia";

import "@/assets/main.css";

import App from "@/App.vue";
const app = createApp(App);

app.use(createPinia());

import MainMenu from "@/components/menu/MainMenu.vue";
import NavMenu from "@/components/menu/NavMenu.vue";
app.component("MainMenu", MainMenu);
app.component("NavMenu", NavMenu);

import HorTile from "@/components/tile/HorTile.vue";
import VerTile from "@/components/tile/VerTile.vue";
app.component("HorTile", HorTile);
app.component("VerTile", VerTile);

import PrimaryButton from "@/components/button/PrimaryButton.vue";
app.component("PrimaryButton", PrimaryButton);

app.mount("#app");
