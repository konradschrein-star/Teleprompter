const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow = null;
let pipWindow = null;

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
        if (pipWindow) {
            pipWindow.close();
        }
    });

    // Handle PiP window requests
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
        if (pipWindow) {
            pipWindow.webContents.send('content-update', data);
        }
    });

    ipcMain.on('update-pip-scroll', (event, scrollTop) => {
        if (pipWindow) {
            pipWindow.webContents.send('scroll-update', scrollTop);
        }
    });

    ipcMain.on('update-pip-playback', (event, isPlaying, status) => {
        if (pipWindow) {
            pipWindow.webContents.send('playback-update', isPlaying, status);
        }
    });
}

function createPiPWindow(data) {
    pipWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 300,
        minHeight: 200,
        backgroundColor: data.theme === 'dark' ? '#1a1a1a' : '#ffffff',
        frame: true,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
        icon: path.join(__dirname, 'icon.png'),
        title: 'Teleprompter - PiP'
    });

    // Create PiP HTML content
    const pipHtml = `
<!DOCTYPE html>
<html lang="en" data-theme="${data.theme}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teleprompter PiP</title>
    <style>
        :root {
            --bg-primary: #1a1a1a;
            --text-primary: #ffffff;
        }

        [data-theme="light"] {
            --bg-primary: #ffffff;
            --text-primary: #000000;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--bg-primary);
            color: var(--text-primary);
            overflow-y: auto;
            overflow-x: hidden;
            height: 100vh;
            padding: 20px;
            font-family: ${data.fontFamily};
        }

        body::-webkit-scrollbar {
            width: 12px;
        }

        body::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
        }

        body::-webkit-scrollbar-thumb {
            background: rgba(128, 128, 128, 0.5);
            border-radius: 6px;
        }

        .pip-content {
            max-width: ${data.lineWidth};
            margin: 0 auto;
            font-size: ${data.fontSize};
            line-height: 1.6;
            font-family: ${data.fontFamily};
            color: ${data.fontColor};
            white-space: pre-wrap;
            word-wrap: break-word;
        }

        .playback-indicator {
            position: fixed;
            top: 10px;
            right: 10px;
            padding: 6px 12px;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 15px;
            font-size: 11px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 6px;
            z-index: 1000;
        }

        .playback-indicator.playing {
            color: #4a9eff;
        }

        .playback-indicator .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: currentColor;
        }

        .playback-indicator.playing .dot {
            animation: pulse 1s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
        }
    </style>
</head>
<body>
    <div class="playback-indicator" id="playbackIndicator">
        <div class="dot"></div>
        <span id="playbackStatus">Paused</span>
    </div>
    <div class="pip-content" id="pipContent">${data.content}</div>

    <script>
        const { ipcRenderer } = require('electron');

        // Listen for content updates from main window
        ipcRenderer.on('content-update', (event, data) => {
            const pipContent = document.getElementById('pipContent');
            const html = document.documentElement;

            pipContent.textContent = data.content;
            pipContent.style.fontFamily = data.fontFamily;
            pipContent.style.fontSize = data.fontSize;
            pipContent.style.color = data.fontColor;
            pipContent.style.maxWidth = data.lineWidth;
            html.setAttribute('data-theme', data.theme);
        });

        // Listen for scroll updates
        ipcRenderer.on('scroll-update', (event, scrollTop) => {
            document.body.scrollTop = scrollTop;
            document.documentElement.scrollTop = scrollTop;
        });

        // Listen for playback status updates
        ipcRenderer.on('playback-update', (event, isPlaying, status) => {
            const indicator = document.getElementById('playbackIndicator');
            const statusText = document.getElementById('playbackStatus');

            if (isPlaying) {
                indicator.classList.add('playing');
            } else {
                indicator.classList.remove('playing');
            }
            statusText.textContent = status;
        });
    </script>
</body>
</html>
    `;

    pipWindow.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(pipHtml));

    pipWindow.on('closed', () => {
        pipWindow = null;
        if (mainWindow) {
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
