const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
    openPiP: (data) => ipcRenderer.send('open-pip', data),
    closePiP: () => ipcRenderer.send('close-pip'),
    updatePiPContent: (data) => ipcRenderer.send('update-pip-content', data),
    updatePiPScroll: (scrollTop) => ipcRenderer.send('update-pip-scroll', scrollTop),
    updatePiPPlayback: (isPlaying, status) => ipcRenderer.send('update-pip-playback', isPlaying, status),
    onPiPClosed: (callback) => ipcRenderer.on('pip-closed', callback),
    isElectron: true
});
