# How to Install Node.js on Windows

## Step-by-Step Installation Guide

### Method 1: Official Installer (Recommended)

1. **Download Node.js:**
   - Open your web browser
   - Go to: **https://nodejs.org/**
   - Click the green **"LTS"** button (recommended version, e.g., v20.x.x)
   - The .msi installer will download

2. **Run the Installer:**
   - Double-click the downloaded file (e.g., `node-v20.x.x-x64.msi`)
   - Click "Next" through the setup wizard
   - **IMPORTANT:** Make sure "Add to PATH" option is checked (it should be by default)
   - Click "Install"
   - Wait for installation to complete
   - Click "Finish"

3. **Verify Installation:**
   - **Close and reopen PowerShell** (this is important!)
   - Type:
     ```powershell
     node --version
     ```
   - You should see something like: `v20.x.x`
   - Type:
     ```powershell
     npm --version
     ```
   - You should see something like: `10.x.x`

4. **If it still doesn't work:**
   - Restart your computer
   - Or manually add Node.js to PATH (see below)

---

### Method 2: Using Chocolatey (if you have it)

If you have Chocolatey package manager installed:

```powershell
choco install nodejs
```

Then close and reopen PowerShell.

---

### Method 3: Using Winget (Windows 10/11)

```powershell
winget install OpenJS.NodeJS.LTS
```

Then close and reopen PowerShell.

---

## After Installation

Once Node.js is installed, come back to this project and run:

```powershell
cd backend
npm install
npm start
```

Then in a new terminal:
```powershell
cd frontend
npm install
npm start
```

---

## Troubleshooting: Adding Node.js to PATH Manually

If Node.js is installed but still not recognized:

1. Find where Node.js is installed (usually `C:\Program Files\nodejs\`)

2. Add to PATH:
   - Press `Win + X` and select "System"
   - Click "Advanced system settings"
   - Click "Environment Variables"
   - Under "System variables", find "Path" and click "Edit"
   - Click "New" and add: `C:\Program Files\nodejs`
   - Click "OK" on all windows
   - Close and reopen PowerShell

---

## Need Help?

If you're still having issues:
1. Make sure you downloaded the correct version (64-bit)
2. Try restarting your computer after installation
3. Check if antivirus is blocking the installation

