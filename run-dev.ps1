# Starts backend and frontend in separate PowerShell windows
# Usage: Right-click -> Run with PowerShell, or execute in PowerShell

$root = Split-Path -Parent $MyInvocation.MyCommand.Definition

# Start backend
Start-Process powershell -ArgumentList "-NoExit -Command cd '$root\\backend'; npm run dev"

Start-Sleep -Seconds 2

# Start frontend
Start-Process powershell -ArgumentList "-NoExit -Command cd '$root\\frontend'; npm run dev"
