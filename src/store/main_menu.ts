import { defineStore } from "pinia";

export enum MenuBtt {
    None = "none",
    File = "file",
    Edit = "edit",
    View = "view",
    Tools = "tools",
    Help = "help",
    About = "about"
}

export const useMainMenuStore = defineStore("MainMenuHandler", {
    state: () => ({
        status: MenuBtt.None as MenuBtt,
        recordMouseBtt: false as boolean,
        recordMouseScr: false as boolean,
        coordX: 0 as number,
        coordY: 0 as number
    }),
    actions: {
        setStatus(status: MenuBtt, rect: any): void
        {
            console.log(rect);
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
