# Push to GitHub - Step by Step Guide

## Step 1: Install Git (if not installed)

1. Download Git from: https://git-scm.com/download/win
2. Run the installer with default settings
3. **Restart PowerShell** after installation

---

## Step 2: Configure Git (First time only)

Open PowerShell and run:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace with your actual name and email (the one you use for GitHub).

---

## Step 3: Initialize Git Repository

Navigate to your project folder and run:

```powershell
cd C:\Users\ASHWINI\Desktop\EquipmentTracker
git init
```

---

## Step 4: Create .gitignore (if needed)

Make sure we don't push unnecessary files. Check if `.gitignore` exists (we already created one).

---

## Step 5: Add and Commit Files

```powershell
git add .
git commit -m "Initial commit: Equipment Tracker application"
```

---

## Step 6: Add Remote Repository

```powershell
git remote add origin https://github.com/PUNEETHPOOJARY08/EquipmentTracker.git
```

---

## Step 7: Push to GitHub

```powershell
git branch -M main
git push -u origin main
```

You'll be prompted for your GitHub username and password (use a Personal Access Token, not your regular password).

---

## If You Need a Personal Access Token

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Select scope: `repo` (full control)
4. Copy the token
5. Use this token as password when pushing

---

## Quick Command Summary (After Git is installed)

```powershell
cd C:\Users\ASHWINI\Desktop\EquipmentTracker
git init
git add .
git commit -m "Initial commit: Equipment Tracker application"
git remote add origin https://github.com/PUNEETHPOOJARY08/EquipmentTracker.git
git branch -M main
git push -u origin main
```

