# Script to push Equipment Tracker to GitHub
# Make sure Git is installed first!

Write-Host "Pushing Equipment Tracker to GitHub..." -ForegroundColor Green

# Initialize git repository
Write-Host "`n1. Initializing git repository..." -ForegroundColor Yellow
git init

# Add all files
Write-Host "`n2. Adding files..." -ForegroundColor Yellow
git add .

# Commit
Write-Host "`n3. Committing files..." -ForegroundColor Yellow
git commit -m "Initial commit: Equipment Tracker application"

# Add remote (remove if exists first)
Write-Host "`n4. Adding remote repository..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin https://github.com/PUNEETHPOOJARY08/EquipmentTracker.git

# Push to main branch
Write-Host "`n5. Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "You'll be asked for your GitHub username and password/token" -ForegroundColor Cyan
git branch -M main
git push -u origin main

Write-Host "`nDone! Check your repository at: https://github.com/PUNEETHPOOJARY08/EquipmentTracker" -ForegroundColor Green

