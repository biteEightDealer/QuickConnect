const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api',{
    saveServer: (server) => ipcRenderer.invoke('db:create-server', server),
    getServers: (page) => ipcRenderer.invoke('db:get-servers', page),
});