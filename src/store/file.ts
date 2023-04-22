import { open } from "@tauri-apps/api/dialog";
import { defineStore } from "pinia";

export const useFileSore = defineStore("FileHandler", {
    state: () => ({

    }),
    actions: {
        async openFile()
        {
             const file = open({
                 multiple: false,
                 filters: [{
                     name: "images",
                     extensions: ["png", "jpg"]
                 }]
             });
             if (file === null)
                 return;
        }
    }
})
