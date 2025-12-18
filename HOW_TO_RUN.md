# How to Run Equipment Tracker

## Quick Start (Both servers need to run)

### Terminal 1 - Backend Server

Open PowerShell and run:
```powershell
cd C:\Users\ASHWINI\Desktop\EquipmentTracker\backend
$env:PATH += ";C:\Program Files\nodejs"
npm start
```

Wait until you see: `Server is running on port 5000`

**Keep this terminal open!**

---

### Terminal 2 - Frontend Server

Open a **NEW** PowerShell window and run:
```powershell
cd C:\Users\ASHWINI\Desktop\EquipmentTracker\frontend
$env:PATH += ";C:\Program Files\nodejs"
npm start
```

The browser will automatically open to `http://localhost:3000`

**Keep this terminal open too!**

---

## Using the Helper Scripts

I've created helper scripts to make it easier:

1. **start-backend.ps1** - Double-click to start backend
2. **start-frontend.ps1** - Double-click to start frontend

(But remember: each needs its own PowerShell window!)

---

## Current Status

✅ Backend: Running on http://localhost:5000
✅ Frontend: Starting on http://localhost:3000

Both need to be running at the same time for the app to work!

---

## Note about PATH

If Node.js is not recognized, add this to PATH each time:
```powershell
$env:PATH += ";C:\Program Files\nodejs"
```

Or fix it permanently (see FIX_PATH.md)

