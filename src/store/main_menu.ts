import { defineStore } from "pinia";

export enum MenuBtt {
    None  = "none",
    File  = "file",
    Edit  = "edit",
    View  = "view",
    Tools = "tools",
    Help  = "help",
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
        setStatus(status: MenuBtt, rect: DOMRect | null): void
        {
            if (!rect)
                return;
            this.coordX = rect.left;
            this.coordY = rect.bottom;
            this.status = status;
        },
        mouseInBtt(status: MenuBtt): void
        {
            if (this.status !== status)
                return;
            this.recordMouseBtt = true;
        },
        mouseOutBtt(): void
        {
            if (this.status !== status)
                return;
            this.recordMouseBtt = false;
            if (!this.recordMouseScr)
                this.status = MenuBtt.None;
        },
        mouseInScr(): void
        {
            this.recordMouseScr = true;
        },
        mouseOutScr(): void
        {
            this.recordMouseScr = false;
            if (!this.recordMouseBtt)
                this.status = MenuBtt.None;
        }
    }
})
