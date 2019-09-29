const { app, BrowserWindow } = require('electron');
const path = require('path');
const ffi = require("ffi");
const ref = require("ref");

function createWindow()
{
    let win = new BrowserWindow({ /* 创建浏览器窗口. */
        width : 800,
        height : 600,
        webPreferences : {
            nodeIntegration : true,
            nodeIntegrationInWorker : true
        }
    });
    win.loadURL(`file://${__dirname}/index.html`)
    win.webContents.openDevTools()
}

app.on('ready', createWindow)
