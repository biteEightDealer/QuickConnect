const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api',{
    saveServer: (server) => ipcRenderer.invoke('db:save-server', server),
});