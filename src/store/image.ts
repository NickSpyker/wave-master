import { invoke } from "@tauri-apps/api/tauri";
import { defineStore } from "pinia";

export const useImageSore = defineStore("ImageHandler", {
    state: () => ({
        img: new Uint8Array(0)
    }),
    actions: {
        loadImage(path: string): void
        {
            invoke("get_image_data", {path: path}).then(out => {
                this.img = out as Uint8Array;
            }).catch(err => {
                console.log(err);
            });
        }
    }
})
