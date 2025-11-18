# ⚡ GhostArchive - 5 Minute Quickstart

## 🚀 Installation (2 minutes)

### Option 1: Windows Batch Script (Easiest)
```bash
# Double-click install.bat
# Or run from terminal:
install.bat
```

### Option 2: Manual Install
```bash
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..
```

## 🎮 Running the App (1 minute)

### Option 1: Windows Batch Script
```bash
# Double-click start.bat
# Or run from terminal:
start.bat
```

### Option 2: Single Command
```bash
npm run dev
```

### Option 3: Separate Terminals
```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2
cd frontend
npm run dev
```

## 🌐 Access

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000/api/personalities

## 🎯 First Commands (2 minutes)

```bash
# 1. See available commands
> help

# 2. List all ghost personalities
> show personalities

# 3. Connect to Napoleon
> connect napoleon

# 4. View corrupted fragments
> show lost_files

# 5. Restore a fragment
> restore napoleon_log1

# 6. Switch to Tesla
> connect tesla

# 7. Trigger mysterious event
> lore

# 8. Try Mona Lisa
> connect monalisa

# 9. Ask her a question
> why do you smile?
```

## 🎨 All Available Personalities

- `napoleon` - Military green theme, strategic responses
- `cleopatra` - Golden theme, regal and poetic
- `monalisa` - Sepia theme, cryptic and artistic
- `tesla` - Electric blue theme, technical and visionary

## 🐛 Troubleshooting

**Port 3000 already in use?**
- Edit `frontend/vite.config.js` line 6: change `port: 3000` to another port

**Port 5000 already in use?**
- Edit `backend/app.js` line 10: change `const PORT = 5000` to another port

**Dependencies not installing?**
```bash
npm cache clean --force
npm run install-all
```

**Can't connect to backend?**
- Make sure backend is running on port 5000
- Check `frontend/vite.config.js` proxy settings

## 📚 Next Steps

- Read `README.md` for full documentation
- Check `DEMO_SCRIPT.md` for presentation guide
- Explore `SETUP.md` for detailed setup info
- Modify `.kiro/steering/*.md` to customize AI personalities
- Edit `frontend/src/themes/themes.json` to change colors
- Add new fragments in `backend/data/`

## 🎃 Have Fun!

You're now ready to communicate with the dead. Type `help` in the terminal to get started!

Built for Kiroween Hackathon 2024 👻
