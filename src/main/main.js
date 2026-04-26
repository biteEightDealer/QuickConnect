const {app, BrowserWindow} = require('electron');
const {ipcMain} = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preaload: path.join(__dirname, './preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

ipcMain.handle('db:save-server', async (event, server) => {
  console.log('Saving server:', server);
  try {
    return {success: true, message: 'Server saved successfully'};
  } catch (error) {
    return {success: false, message: 'Failed to save server'};
  }
});