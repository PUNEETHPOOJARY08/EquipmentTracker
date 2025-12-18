# Add Node.js to PATH for this session
$env:PATH += ";C:\Program Files\nodejs"

# Navigate to frontend directory
cd frontend

# Install dependencies
Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
npm install

# Start the frontend server
Write-Host "Starting frontend server..." -ForegroundColor Green
npm start

