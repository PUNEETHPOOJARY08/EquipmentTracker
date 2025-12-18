# Quick Deployment Guide

## Easiest Option: Render (Backend) + Vercel (Frontend)

### ⚡ Step 1: Deploy Backend to Render (5 minutes)

1. **Go to Render**: https://render.com
   - Sign up/login with GitHub

2. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect GitHub repository: `PUNEETHPOOJARY08/EquipmentTracker`
   - Configure:
     - **Name**: `equipment-tracker-api`
     - **Root Directory**: `backend`
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
   - Click "Create Web Service"

3. **Wait for deployment** (2-3 minutes)

4. **Copy your backend URL** (e.g., `https://equipment-tracker-api.onrender.com`)
   - ⚠️ **IMPORTANT**: Save this URL - you'll need it!

---

### ⚡ Step 2: Deploy Frontend to Vercel (3 minutes)

1. **Go to Vercel**: https://vercel.com
   - Sign up/login with GitHub

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select repository: `PUNEETHPOOJARY08/EquipmentTracker`

3. **Configure**:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `build` (auto-detected)

4. **Environment Variables**:
   - Click "Environment Variables"
   - Add:
     - **Name**: `REACT_APP_API_URL`
     - **Value**: `https://your-backend-url.onrender.com` (use the URL from Step 1)

5. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes

6. **Done!** Your app is live at: `https://your-app.vercel.app`

---

## Alternative: Deploy Both on Render

### Backend (same as above)

### Frontend on Render:

1. **New +** → **Static Site**
2. Connect GitHub: `PUNEETHPOOJARY08/EquipmentTracker`
3. Configure:
   - **Name**: `equipment-tracker`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
4. **Environment Variables**:
   - `REACT_APP_API_URL` = `https://your-backend-url.onrender.com`
5. Deploy!

---

## After Deployment

✅ Your frontend URL: `https://your-app.vercel.app` (or Render URL)
✅ Your backend URL: `https://your-api.onrender.com`

**Important Notes:**
- Render free tier spins down after 15 minutes of inactivity (takes 30 seconds to wake up)
- Vercel is always fast and free
- Data is stored in JSON file (persists on Render)

---

## Troubleshooting

**Frontend can't connect to backend:**
- Check `REACT_APP_API_URL` environment variable
- Make sure backend URL doesn't have trailing slash
- Rebuild frontend after changing environment variable

**Backend not working:**
- Check Render logs for errors
- Verify PORT is set correctly (Render uses `process.env.PORT`)

