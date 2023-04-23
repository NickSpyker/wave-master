import { defineStore } from "pinia";

export enum Workspace {
    TileSet = 0,
    BitMap  = 1,
    Pattern = 2,
    TileMap = 3
}

export const useRootSore = defineStore("RootHandler", {
    state: () => ({
        actual: Workspace.TileSet as Workspace
    }),
    actions: {
        changeWorkspace(workspace: Workspace): void
        {
            this.actual = workspace;
        },
        isWorkspace(workspace: Workspace): boolean
        {
            return this.actual === workspace;
        }
    }
})
