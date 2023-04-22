import { createApp } from "vue";
import { createPinia } from "pinia";

import "@/assets/main.css";

import App from "@/App.vue";
const app = createApp(App);

app.use(createPinia());

/*
 * Menu
 */
import MainMenu from "@/entities/MainMenu.vue";
import NavMenu from "@/entities/NavMenu.vue";
import SideMenu from "@/entities/SideMenu.vue";
app.component("MainMenu", MainMenu);
app.component("NavMenu", NavMenu);
app.component("SideMenu", SideMenu);

/*
 * Button
 */
import MenuButton from "@/components/buttons/MenuButton.vue";
import NavButton from "@/components/buttons/NavButton.vue";
import FileButton from "@/components/buttons/FileButton.vue";
app.component("MenuButton", MenuButton);
app.component("NavButton", NavButton);
app.component("FileButton", FileButton);

/*
 * View
 */
import TileSetView from "@/views/TileSetView.vue";
import BitMapView from "@/views/BitMapView.vue";
import PatternView from "@/views/PatternView.vue";
import TileMapView from "@/views/TileMapView.vue";
app.component("TileSetView", TileSetView);
app.component("BitMapView", BitMapView);
app.component("PatternView", PatternView);
app.component("TileMapView", TileMapView);

app.mount("#app");
