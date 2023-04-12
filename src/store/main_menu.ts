import { defineStore } from "pinia";

export const useMainMenuStore = defineStore("MainMenuHandler", {
    state: () => ({
        status: null as boolean | null
    }),
    actions: {
        openAllDrawers()
        {
            this.status = true;
        },
        closeAllDrawers()
        {
            this.status = false;
        },
        reset()
        {
            this.status = null;
        }
    }
})
