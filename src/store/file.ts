import { open } from "@tauri-apps/api/dialog";
import { defineStore } from "pinia";

export const useFileSore = defineStore("FileHandler", {
    state: () => ({
        paths: [] as string[]
    }),
    actions: {
        async openFile()
        {
             open({
                 multiple: true,
                 filters: [{
                     name: "images",
                     extensions: ["png", "jpg"]
                 }]
             }).then(fp => {
                 if (fp === null) {
                     return;
                 }
                 this.addFile(fp);
             });
        },
        addFile(fp: string | string[]): void
        {
            if (typeof fp === "string") {
                this.paths.push(fp);
            } else {
                this.paths = this.paths.concat(fp);
            }
            this.paths = this.paths.filter((value, index, array) => {
                return array.indexOf(value) === index;
            });
        },
        files(): string[]
        {
            return this.paths;
        },
        getName(file: string): string
        {
            const index: number = file.lastIndexOf("/");
            if (0 <= index) {
                return file.substring(index + 1);
            } else {
                return file;
            }
        }
    }
})
