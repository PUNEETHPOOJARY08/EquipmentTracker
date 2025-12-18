# Setup Instructions - Equipment Tracker

## Step 1: Install Node.js

You need to install Node.js first (it includes npm).

### Download and Install Node.js:

1. Go to: https://nodejs.org/
2. Download the **LTS version** (recommended, e.g., v20.x.x)
3. Run the installer
4. Follow the installation wizard (use default settings)
5. **Important:** Check the box "Add to PATH" if asked during installation
6. Restart your terminal/PowerShell after installation

### Verify Installation:

After installing, close and reopen PowerShell, then run:
```powershell
node --version
npm --version
```

You should see version numbers for both commands.

---

## Step 2: Install Backend Dependencies

Open PowerShell and run:

```powershell
cd C:\Users\ASHWINI\Desktop\EquipmentTracker\backend
npm install
```

---

## Step 3: Start Backend Server

Keep the backend terminal open and run:

```powershell
npm start
```

You should see: `Server is running on port 5000`

**Leave this terminal running!**

---

## Step 4: Install Frontend Dependencies

Open a **NEW** PowerShell window and run:

```powershell
cd C:\Users\ASHWINI\Desktop\EquipmentTracker\frontend
npm install
```

---

## Step 5: Start Frontend

In the same frontend terminal, run:

```powershell
npm start
```

The browser should open automatically at `http://localhost:3000`

---

## Troubleshooting

**If npm is still not recognized after installing Node.js:**
1. Close and reopen PowerShell (or restart your computer)
2. Check if Node.js is in PATH:
   ```powershell
   $env:PATH
   ```
   Look for Node.js in the path
3. If not found, manually add Node.js to PATH or reinstall Node.js

**Alternative: Use Chocolatey (if you have it)**
```powershell
choco install nodejs
```

