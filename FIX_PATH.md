# Fix PATH Permanently (Optional but Recommended)

Node.js is installed but not in your PATH permanently. To fix this so you don't need to add it every time:

## Option 1: System Properties (Recommended)

1. Press `Win + X` and select **"System"**
2. Click **"Advanced system settings"** (on the right)
3. Click **"Environment Variables"** button (at the bottom)
4. Under **"System variables"**, find **"Path"** and click **"Edit"**
5. Click **"New"**
6. Type: `C:\Program Files\nodejs`
7. Click **"OK"** on all windows
8. **Close and reopen PowerShell**

## Option 2: PowerShell (Quick Fix)

Run this in PowerShell as Administrator:

```powershell
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Program Files\nodejs", [EnvironmentVariableTarget]::Machine)
```

Then close and reopen PowerShell.

---

**Note:** For now, the backend server is running. You can continue without fixing PATH, but you'll need to add Node.js to PATH each time you open a new PowerShell window.

