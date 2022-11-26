import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

contextBridge.exposeInMainWorld('api', {
    // Invoke Methods
    testInvoke: (args: any) => ipcRenderer.invoke('fileWrite3', args),
    // Send Methods
    testSend: (args: any) => ipcRenderer.invoke('fileName', args),
    // Receive Methods
    testReceive: (callback: (arg0: any) => void) => ipcRenderer.on('fileRead', (event, data) => {
        callback(data)
    }),
    startCsr: (filename: any) => ipcRenderer.invoke('csr', filename),
    combinePfx: (paths: any) => ipcRenderer.invoke('combinePfx', paths),
    installPfx: (path: any) => ipcRenderer.invoke('installPfx', path),
    installCert: (path: any) => ipcRenderer.invoke('installCert', path)
})
