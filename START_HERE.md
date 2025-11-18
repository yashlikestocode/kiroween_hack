# 🎃 START HERE - GhostArchive Setup

Welcome to **GhostArchive: Portal to the Lost Souls**!

## 🚀 Three Steps to Get Started

### Step 1: Install Dependencies (2 minutes)

**Windows Users:**
```bash
# Double-click this file:
install.bat
```

**Mac/Linux Users:**
```bash
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..
```

### Step 2: Start the Application (30 seconds)

**Windows Users:**
```bash
# Double-click this file:
start.bat
```

**Mac/Linux Users:**
```bash
# Option A: Run both servers together
npm run dev

# Option B: Run in separate terminals
# Terminal 1:
cd backend && npm run dev

# Terminal 2:
cd frontend && npm run dev
```

### Step 3: Open Your Browser

Navigate to: **http://localhost:3000**

## 🎮 Your First Commands

Once the terminal loads:

1. Click **"ENTER TERMINAL"**
2. Type: `help` (see all commands)
3. Type: `show personalities` (see available ghosts)
4. Type: `connect napoleon` (connect to Napoleon)
5. Type: `show lost_files` (see corrupted fragments)
6. Type: `restore napoleon_log1` (restore a memory)
7. Type: `connect tesla` (switch to Tesla)
8. Type: `lore` (trigger a mysterious event)

## 📚 Documentation Guide

- **QUICKSTART.md** - Read this first! 5-minute guide
- **README.md** - Full project documentation
- **DEMO_SCRIPT.md** - How to present to judges
- **SETUP.md** - Detailed technical setup
- **CHECKLIST.md** - Implementation status
- **PROJECT_SUMMARY.md** - High-level overview

## 🆘 Having Issues?

### Port Already in Use?
- Frontend (3000): Edit `frontend/vite.config.js`
- Backend (5000): Edit `backend/app.js`

### Dependencies Won't Install?
```bash
npm cache clean --force
npm run install-all
```

### Can't See the Terminal?
- Make sure both frontend AND backend are running
- Check console for errors (F12 in browser)

## 🎯 What You'll Experience

- 👻 Connect to 4 historical ghost personalities
- 🎨 Watch the terminal theme change for each ghost
- 📜 Restore corrupted historical fragments
- 🌀 Trigger mysterious lore events
- ⚡ Experience retro CRT terminal effects

## 🏆 For Hackathon Judges

This project showcases:
- **Agentic AI**: Multiple autonomous agents with specialized roles
- **Dynamic UX**: Real-time theme switching and effects
- **Full Stack**: React frontend + Node backend + AI agents
- **Extensible**: Easy to add new personalities and features

## 💡 Next Steps

1. ✅ Install and run the app
2. ✅ Try all 4 personalities
3. ✅ Read DEMO_SCRIPT.md for presentation tips
4. ✅ Customize themes in `frontend/src/themes/themes.json`
5. ✅ Add new fragments in `backend/data/`
6. ✅ Modify AI behavior in `.kiro/steering/`

## 🎃 Ready? Let's Go!

```bash
install.bat
start.bat
```

Then open http://localhost:3000 and type `help`

**Welcome to the afterlife.** 👻

---

Built for Kiroween Hackathon 2024
