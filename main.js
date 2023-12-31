const { app, BrowserWindow } = require('electron');
const path = require('path');
const createWindow = () => {
  const windows = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  windows.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if ((BrowserWindow.getAllWindows().length = 0)) {
      createWindow();
    }
  });
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
