import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import { AppDataSource } from "../data-source";
import { ServerService } from "../service/service";

const serverService = new ServerService();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  })

  win.loadFile(path.join(__dirname, '../../src/main/index.html'))
}

app.whenReady().then(async () => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log("Data Source has been initialized!");
    }
    createWindow();
  } catch (err) {
    console.error("Error during Data Source initialization", err);
  }
})

ipcMain.handle('db:create-server', async (event, server) => {
  console.log('Saving server:', server);
  try {
    const saved = await serverService.createServer(server);
    console.log("Saved: ", saved)
    return { success: true }
  } catch (error) {
    console.error('Failed to save server:', error);
    return { success: false, message: 'Failed to save server' };
  }
});

ipcMain.handle('db:get-servers', async (event, page) => {
  try {
    const pageNum = page || 1;
    const limit = 5;
    return await serverService.getServers(pageNum, limit);
  } catch (error) {
    console.error('Failed to get servers:', error);
    return { data: [], total: 0, page: 1, limit: 5, totalPages: 1 };
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
