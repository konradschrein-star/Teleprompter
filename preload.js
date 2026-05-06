const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
    // Main window API
    openPiP: (data) => ipcRenderer.send('open-pip', data),
    closePiP: () => ipcRenderer.send('close-pip'),
    updatePiPContent: (data) => ipcRenderer.send('update-pip-content', data),
    updatePiPScroll: (scrollTop) => ipcRenderer.send('update-pip-scroll', scrollTop),
    updatePiPPlayback: (isPlaying, status) => ipcRenderer.send('update-pip-playback', isPlaying, status),
    onPiPClosed: (callback) => ipcRenderer.on('pip-closed', callback),

    // PiP window API - for receiving updates
    onPiPSetup: (callback) => ipcRenderer.on('pip-setup', (event, data) => callback(data)),
    onPiPContentUpdate: (callback) => ipcRenderer.on('pip-content-update', (event, data) => callback(data)),
    onPiPScroll: (callback) => ipcRenderer.on('pip-scroll', (event, scrollTop) => callback(scrollTop)),
    onPiPPlayback: (callback) => ipcRenderer.on('pip-playback', (event, isPlaying, status) => callback(isPlaying, status)),

    // PiP window controls - send commands back to main window
    playbackToggle: () => ipcRenderer.send('pip-playback-toggle'),
    playbackHold: () => ipcRenderer.send('pip-playback-hold'),
    playbackRelease: () => ipcRenderer.send('pip-playback-release'),
    scrollToTop: () => ipcRenderer.send('pip-scroll-to-top'),

    // Main window - receive playback commands from PiP
    onPiPPlaybackToggle: (callback) => ipcRenderer.on('main-playback-toggle', () => callback()),
    onPiPPlaybackHold: (callback) => ipcRenderer.on('main-playback-hold', () => callback()),
    onPiPPlaybackRelease: (callback) => ipcRenderer.on('main-playback-release', () => callback()),
    onPiPScrollToTop: (callback) => ipcRenderer.on('main-scroll-to-top', () => callback()),

    isElectron: true
});
