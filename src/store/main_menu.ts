import { defineStore } from "pinia";

export enum MenuBtt {
    None,
    File,
    Edit,
    View,
    Tools,
    Help,
    About
}

export const useMainMenuStore = defineStore("MainMenuHandler", {
    state: () => ({
        status: MenuBtt.None as MenuBtt,
        recordMouseBtt: false as boolean,
        recordMouseScr: false as boolean
    }),
    actions: {
        getStatus(): MenuBtt
        {
            return this.status;
        },
        setStatus(status: MenuBtt): void
        {
            this.status = status;
        },
        mouseInBtt(status: MenuBtt): void
        {
            if (this.status !== status)
                return;
            this.recordMouseBtt = true;
        },
        mouseOutBtt(status: MenuBtt): void
        {
            if (this.status !== status)
                return;
            this.recordMouseBtt = false;
        },
        reset(): void
        {
            this.status = MenuBtt.None;
            this.recordMouseBtt = false;
            this.recordMouseScr = false;
        }
    }
})
