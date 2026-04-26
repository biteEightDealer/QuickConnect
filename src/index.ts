import { ServerService } from "./service/service";
import { ipcMain } from "electron";

const serverService = new ServerService();

ipcMain.handle("create-server", async (event, server) => {
    try {
        await serverService.createServer(server);
        return { success: true };
    } catch (error) {
        console.error("Error creating server:", error);
        return { success: false, error: error.message };
    }
});