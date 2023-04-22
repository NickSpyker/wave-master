import { defineStore } from "pinia";

export enum Workspace {
    TileSet,
    BitMap,
    Pattern,
    TileMap
}

export const useRootSore = defineStore("RootHandler", {
    state: () => ({
        actual: Workspace.TileSet as Workspace
    }),
    actions: {
        changeWorkspace(workspace: Workspace): void
        {
            console.log(workspace);
            this.actual = workspace;
        },
        isWorkspace(workspace: Workspace): boolean
        {
            return this.actual === workspace;
        }
    }
})
