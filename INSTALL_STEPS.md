# Install Node.js - Quick Steps

You've downloaded Node.js, now you need to **INSTALL** it:

## Step 1: Find the Downloaded File

1. Open your **Downloads** folder (usually in File Explorer)
2. Look for a file named something like:
   - `node-v20.x.x-x64.msi`
   - `node-v20.x.x-x64.exe`
   - Or just `node` in the filename

## Step 2: Run the Installer

1. **Double-click** the downloaded file
2. Windows might ask "Do you want to allow this app to make changes?" - Click **Yes**
3. The Node.js installer will open

## Step 3: Complete the Installation

1. Click **Next** on the welcome screen
2. Accept the license agreement and click **Next**
3. Choose installation location (default is fine) - Click **Next**
4. **Important:** Make sure "Add to PATH" is checked (it should be by default) - Click **Next**
5. Click **Install**
6. Wait for installation (usually 30-60 seconds)
7. Click **Finish** when done

## Step 4: Restart PowerShell

**VERY IMPORTANT:** 
1. **Close** this PowerShell window completely
2. **Open a NEW** PowerShell window
3. Then try: `node --version`

If you see a version number (like v20.x.x), you're done!

---

## Quick Test After Installation

In a NEW PowerShell window, run:
```powershell
node --version
npm --version
```

Both should show version numbers.

Then you can continue with:
```powershell
cd backend
npm install
```

