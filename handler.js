const serverless = require('serverless-http')
const express = require('express')
const path = require('path')
const app = express()
const router = express.Router()

const WINDOWS_COMMAND = '$Path = $env:TEMP; $Installer = "chrome_installer.exe"; Invoke-WebRequest "https://dl.google.com/chrome/install/latest/chrome_installer.exe" -OutFile $Path\\$Installer; Start-Process -FilePath $Path\\$Installer -Verb RunAs -Wait; Remove-Item $Path\\$Installer'

// NOTE: workaround for serverless-offline
const expressPath = process.env.local === 'local' ? '/app' : '/'

router.get(expressPath, function (req, res) {
  const userAgent = req.headers['user-agent'] ?? 'unknown'
  if (req.headers['user-agent'].includes('WindowsPowerShell')) {
    res.send(WINDOWS_COMMAND)
  } else if (req.headers['user-agent'].includes('curl')) {
    res.send('Linux/Mac is not supported yet.\n')
  } else {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
  }
})

app.use(router)
app.use(express.static(path.resolve(__dirname, './client/build')))

exports.handler = serverless(app)