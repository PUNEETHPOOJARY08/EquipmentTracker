# Configure Git Identity

Before you can commit, you need to tell Git who you are.

Run these commands (replace with your actual name and email):

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Use the email associated with your GitHub account** for best results.

Then run:
```powershell
git commit -m "Initial commit: Equipment Tracker application"
git push -u origin main
```

