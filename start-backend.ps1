# Add Node.js to PATH for this session
$env:PATH += ";C:\Program Files\nodejs"

# Navigate to backend directory
cd backend

# Start the backend server
Write-Host "Starting backend server..." -ForegroundColor Green
npm start

