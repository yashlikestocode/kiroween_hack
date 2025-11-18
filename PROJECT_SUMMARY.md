# 👻 GhostArchive - Project Summary

## What is GhostArchive?

A haunted retro terminal that uses Agentic AI to resurrect historical personalities. Users can connect to ghosts, restore corrupted memories, and experience spooky lore events.

## Core Features

### 🤖 Multi-Agent AI System
- **Core Interpreter Agent**: Routes commands to specialist agents
- **4 Personality Agents**: Napoleon, Cleopatra, Mona Lisa, Tesla
- **Restoration Agent**: Repairs corrupted historical fragments
- **Lore Agent**: Generates mysterious atmospheric events

### 🎨 Dynamic Theme Engine
Each ghost has a unique visual theme that transforms the terminal:
- Napoleon: Military green with battle aesthetics
- Cleopatra: Golden with hieroglyphic elements
- Mona Lisa: Sepia with canvas textures
- Tesla: Electric blue with spark effects

### 📜 Fragment Restoration System
Users can discover and restore corrupted historical documents:
- Battle logs from Napoleon's campaigns
- Love letters from Cleopatra
- Artistic musings from Mona Lisa
- Scientific notes from Tesla

### 🌀 Atmospheric Experience
- CRT monitor effects with scanlines
- Typewriter text animations
- Glitch effects and corruption
- Mysterious lore events
- Retro terminal aesthetics

## Tech Stack

- **Frontend**: React 18 + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **AI**: Kiro steering documents for personality agents
- **Styling**: Custom CSS animations + Tailwind utilities


## File Structure

```
ghostarchive/
├── frontend/              # React terminal UI
│   ├── src/
│   │   ├── components/   # Terminal, BootScreen, InputBar, etc.
│   │   ├── themes/       # Color schemes per personality
│   │   └── App.jsx       # Main application
│   └── package.json
├── backend/              # Express API
│   ├── data/            # Historical fragments & personalities
│   └── app.js           # Server with REST endpoints
├── .kiro/
│   └── steering/        # AI personality definitions
├── README.md            # Full documentation
├── QUICKSTART.md        # 5-minute setup guide
├── SETUP.md             # Detailed installation
├── DEMO_SCRIPT.md       # Presentation guide
└── package.json         # Root workspace config
```

## Commands Available

- `help` - Show all commands
- `show personalities` - List available ghosts
- `connect <name>` - Connect to a personality
- `disconnect` - Disconnect from current ghost
- `show lost_files` - View corrupted fragments
- `restore <id>` - Restore a fragment
- `lore` - Trigger mysterious event
- `clear` - Clear terminal

## Why This Wins

1. **True Agentic AI**: Multiple autonomous agents with specialized roles
2. **Immersive UX**: Retro terminal with authentic CRT effects
3. **Extensible**: Easy to add new personalities and fragments
4. **Demo-Friendly**: Visually impressive with clear interactions
5. **Complete**: Frontend, backend, AI, and documentation all done
6. **Hackathon-Ready**: Built for 24-48 hour timeline

## Getting Started

```bash
# Install
install.bat  # or: npm run install-all

# Run
start.bat    # or: npm run dev

# Access
http://localhost:3000
```

Built with 💀 for Kiroween 2024
