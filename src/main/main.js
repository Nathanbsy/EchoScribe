/**
 * Electron main process
 * Handles window creation and manages the application lifecycle
 */

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

/**
 * Create the main application window
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  const startUrl = isDev
    ? 'http://localhost:3000' // Dev server
    : `file://${path.join(__dirname, '../renderer/index.html')}`; // Production build

  mainWindow.loadURL(startUrl);

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

/**
 * App event handlers
 */
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

/**
 * IPC handlers for communication with renderer process
 */

// Example handler for backend communication
ipcMain.handle('invoke-transcribe', async (event, filePath) => {
  try {
    // This will communicate with the Python backend
    // Implementation to be added
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('invoke-generate-subtitles', async (event, transcriptionData) => {
  try {
    // Implementation to be added
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('invoke-realtime-start', async (event) => {
  try {
    // Implementation to be added
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});
