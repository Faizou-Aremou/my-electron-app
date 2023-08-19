const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const windows = new BrowserWindow({
    width: 800,
    height: 600,
  });

  windows.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});