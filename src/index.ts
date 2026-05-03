import { ServerService } from "./service/service";
import { ipcMain } from "electron";

const serverService = new ServerService();

ipcMain.handle("db:create-server", async (event, server) => {
    try {
        const serverCreate = await serverService.createServer(server);
        if(serverCreate != null) {
            console.log("Server created");
        }else{
            console.log("Server not created");
        }
        return { success: true};
    } catch (error) {
        console.error("Error creating server:", error);
        return { success: false};
    }
});