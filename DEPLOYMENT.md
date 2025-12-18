# Deployment Guide - Equipment Tracker

## Deployment Options

### Option 1: Vercel (Frontend) + Render (Backend) - Recommended

**Frontend → Vercel** (Free, easy)
**Backend → Render** (Free tier, persistent storage)

---

## Deploy Backend to Render

### Step 1: Prepare Backend for Render

1. Go to https://render.com and sign up/login

2. Click "New +" → "Web Service"

3. Connect your GitHub repository:
   - Select repository: `PUNEETHPOOJARY08/EquipmentTracker`
   - Root Directory: `backend`
   - Name: `equipment-tracker-backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`

4. Set Environment Variables:
   - `PORT` = `10000` (or leave default)
   - `NODE_ENV` = `production`

5. Click "Create Web Service"

6. Wait for deployment (2-3 minutes)

7. Copy the URL (e.g., `https://equipment-tracker-backend.onrender.com`)

---

## Deploy Frontend to Vercel

### Step 1: Update Frontend API URL

You'll need to update the API URL in `frontend/src/App.js` to use your Render backend URL instead of `localhost:5000`.

### Step 2: Deploy to Vercel

1. Go to https://vercel.com and sign up/login with GitHub

2. Click "Add New..." → "Project"

3. Import your GitHub repository:
   - Select: `PUNEETHPOOJARY08/EquipmentTracker`
   - Root Directory: `frontend`

4. Configure:
   - Framework Preset: `Create React App`
   - Build Command: `npm run build`
   - Output Directory: `build`

5. Add Environment Variable:
   - `REACT_APP_API_URL` = `https://your-backend-url.onrender.com`

6. Click "Deploy"

---

## Option 2: Full Deployment on Render

You can also deploy both frontend and backend on Render.

### Backend (same as above)

### Frontend on Render

1. "New +" → "Static Site"

2. Connect GitHub repository
   - Root Directory: `frontend`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `build`

3. Add Environment Variable:
   - `REACT_APP_API_URL` = `https://your-backend-url.onrender.com`

---

## Option 3: Netlify (Frontend) + Railway (Backend)

### Frontend → Netlify

1. Go to https://netlify.com
2. "Add new site" → "Import an existing project"
3. Connect GitHub repository
4. Build settings:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/build`

### Backend → Railway

1. Go to https://railway.app
2. "New Project" → "Deploy from GitHub repo"
3. Select repository
4. Set root directory to `backend`
5. Railway auto-detects Node.js

---

## Quick Deploy Scripts

See deployment scripts below for automated deployment.

