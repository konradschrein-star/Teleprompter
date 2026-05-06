const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow = null;
let pipWindow = null;

// Set up IPC handlers once at app level
ipcMain.on('open-pip', (event, data) => {
    if (pipWindow) {
        pipWindow.focus();
        return;
    }
    createPiPWindow(data);
});

ipcMain.on('close-pip', () => {
    if (pipWindow) {
        pipWindow.close();
    }
});

ipcMain.on('update-pip-content', (event, data) => {
    if (pipWindow && !pipWindow.isDestroyed()) {
        pipWindow.webContents.send('pip-content-update', data);
    }
});

ipcMain.on('update-pip-scroll', (event, scrollTop) => {
    if (pipWindow && !pipWindow.isDestroyed()) {
        pipWindow.webContents.send('pip-scroll', scrollTop);
    }
});

ipcMain.on('update-pip-playback', (event, isPlaying, status) => {
    if (pipWindow && !pipWindow.isDestroyed()) {
        pipWindow.webContents.send('pip-playback', isPlaying, status);
    }
});

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 800,
        minHeight: 600,
        backgroundColor: '#1a1a1a',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: true
        },
        icon: path.join(__dirname, 'icon.png'),
        show: false
    });

    mainWindow.loadFile('index.html');

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
        if (pipWindow && !pipWindow.isDestroyed()) {
            pipWindow.close();
        }
    });
}

function createPiPWindow(data) {
    pipWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 250,
        minHeight: 150,
        backgroundColor: data.theme === 'dark' ? '#1a1a1a' : '#ffffff',
        frame: false,
        transparent: false,
        alwaysOnTop: true,
        resizable: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
        icon: path.join(__dirname, 'icon.png')
    });

    // Load the PiP window HTML file
    pipWindow.loadFile('pip-window.html');

    // Send initial data once the window is ready
    pipWindow.webContents.once('did-finish-load', () => {
        pipWindow.webContents.send('pip-setup', data);
    });

    pipWindow.on('closed', () => {
        pipWindow = null;
        if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('pip-closed');
        }
    });
}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Handle errors
process.on('uncaughtException', (error) => {
    console.error('Uncaught exception:', error);
});
