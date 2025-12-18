# Fix 404 Error - Troubleshooting Guide

## Where is the 404 happening?

### Option 1: Backend URL shows 404

**Test your backend:**
1. Go to your Render backend URL
2. Try: `https://your-backend.onrender.com/`
   - Should show: `{"message":"Equipment Tracker API is running","status":"ok"}`
3. Try: `https://your-backend.onrender.com/api/equipment`
   - Should show: `[]` (empty array)

**If root (/) works but /api/equipment doesn't:**
- Check Render logs for errors
- The server might have crashed

**If nothing works:**
1. Check Render Dashboard → Logs
2. Look for errors
3. Common issues:
   - Build failed
   - Dependencies missing
   - Wrong root directory

---

### Option 2: Frontend shows 404

**Check:**
1. Did you set the environment variable correctly?
   - `REACT_APP_API_URL` = your backend URL
2. Is the backend URL correct?
   - Should be: `https://your-backend.onrender.com`
   - NO trailing slash!
3. Rebuild frontend after changing env var

---

### Option 3: Frontend can't connect to backend

**Symptoms:**
- Frontend loads but shows no data
- Console shows CORS errors or network errors

**Fix:**
1. Check browser console (F12)
2. Check if backend URL is correct
3. Make sure backend is "Live" on Render
4. Try accessing backend URL directly in browser

---

## Quick Fixes

### 1. Check Render Backend Logs
- Go to Render dashboard
- Click your service
- Click "Logs" tab
- Look for errors

### 2. Check Backend is Running
- In Render, check status should be "Live"
- If "Unknown" or error, check logs

### 3. Test Backend Directly
Open in browser:
- `https://your-backend.onrender.com/`
- Should return JSON

### 4. Rebuild Frontend
- If you changed environment variable:
  - Go to Vercel
  - Click "Redeploy" 
  - Or push a new commit to trigger rebuild

---

## Common Issues

**Issue: Root directory wrong**
- Render: Should be `backend`
- Vercel: Should be `frontend`

**Issue: Build failed**
- Check package.json has all dependencies
- Check for typos in commands

**Issue: Server crashed**
- Check logs for errors
- Common: missing file permissions, wrong paths

**Issue: Environment variable not set**
- Vercel: Make sure `REACT_APP_API_URL` is set
- Rebuild after adding env var

---

## Still having issues?

Share:
1. Which URL shows 404? (Backend or Frontend)
2. What do Render logs say?
3. What error in browser console?

