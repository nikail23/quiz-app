const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const htmlPath = path.join(__dirname, "dist/quiz-app/browser/index.html");
  console.log(`Trying load: ${htmlPath}`);

  mainWindow
    .loadURL(`file://${htmlPath}`)
    .then(() => console.log("Success"))
    .catch((err) => console.error("Fail:", err));

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
