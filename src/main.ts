import * as os from "os";

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const https = require('https');
const fs = require('fs');
const { ConnectionBuilder } = require("electron-cgi");
let mainWindow;
let certDll;

let testPath = path.join(process.resourcesPath, "CertDaddy/CertDaddyBuilds/Windows/CertDaddy.exe");
certDll = (os.platform() === "win32") ? path.join(process.resourcesPath, "CertDaddyBuilds/Windows/CertDaddy.dll")
    : (os.platform() === "darwin") ? path.join(process.resourcesPath, "CertDaddyBuilds/MacOs/CertDaddy.dll")
        : path.join(process.resourcesPath, "CertDaddyBuilds/Windows/CertDaddy.dll");

let connection = new ConnectionBuilder()
    .connectTo(testPath)
    .build();
const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1257,
        height: 827,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true
        },
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    // mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // mainWindow.setIcon(path.join(__dirname, 'CertDaddyIcon.png'));
}
const iconName = path.join(__dirname, 'iconForDragAndDrop.png');
const icon = fs.createWriteStream(iconName);

fs.writeFileSync(path.join(__dirname, 'drag-and-drop-1.md'), '# First file to test drag and drop')
fs.writeFileSync(path.join(__dirname, 'drag-and-drop-2.md'), '# Second file to test drag and drop')

https.get('https://img.icons8.com/ios/452/drag-and-drop.png', (response: any) => {
    response.pipe(icon);
});

app.whenReady().then(async () => {
    await createWindow();
    console.log(__dirname);
});

ipcMain.on('ondragstart', (event, filePath) => {
    event.sender.startDrag({
        file: path.join(__dirname, filePath),
        icon: iconName,
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow.length === 0) {
        createWindow();
    }
});

connection.onDisconnect = () => {
    console.log("lost");
};

ipcMain.handle('greeting',(event, args) => {
    connection.send('greeting', `[${args}]`, (err: any, response: any) => {
        if (err) {
            console.log(err)
        }
        fs.writeFileSync(path.join(__dirname, 'test.txt'), response);
        console.log(response)
    });
})

