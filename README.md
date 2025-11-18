# 👻 GhostArchive: Portal to the Lost Souls

A haunted retro terminal experience powered by Agentic AI for the Kiroween Hackathon.

## 🎃 Concept

GhostArchive is a spooky terminal interface where users can "connect" to resurrected historical personalities:
- **Napoleon Bonaparte** - Military strategist and emperor
- **Cleopatra VII** - Last Pharaoh of Egypt  
- **Mona Lisa** - Da Vinci's enigmatic muse
- **Nikola Tesla** - Visionary inventor

Each personality is an AI agent with unique behaviors, themes, and corrupted historical fragments to restore.

## 🏗️ Architecture

- **Frontend**: React + Tailwind (retro CRT terminal UI)
- **Backend**: Node.js + Express (minimal API)
- **AI Agents**: Kiro steering docs for each personality
- **Theme Engine**: Dynamic color schemes per ghost

## 🚀 Quick Start

```bash
# Install all dependencies
npm run install-all

# Run both frontend and backend
npm run dev
```

Frontend: http://localhost:3000
Backend: http://localhost:5000

## 🎮 Commands

```
help                    - Show available commands
show personalities      - List available souls
connect <name>          - Connect to a ghost (napoleon, cleopatra, monalisa, tesla)
disconnect              - Disconnect from current persona
show lost_files         - View corrupted fragments
restore <id>            - Restore a lost fragment
lore                    - Trigger mysterious events
clear                   - Clear terminal
```

## 🎨 Features

- **Multi-Agent System**: Each personality is a separate AI agent
- **Theme Switching**: Terminal changes colors/effects per ghost
- **Fragment Restoration**: Repair corrupted historical documents
- **Lore Events**: Random spooky occurrences
- **CRT Effects**: Authentic retro terminal aesthetics
- **Typewriter Animation**: Ghostly text appearance

## 📁 Project Structure

```
ghostarchive/
├── frontend/          # React terminal UI
├── backend/           # Express API + data
├── .kiro/            # AI agent steering docs
└── package.json      # Root workspace config
```

## 🎯 Demo Flow

1. Boot screen with ASCII art
2. `show personalities` - List available souls
3. `connect napoleon` - Theme switches to military green
4. Ask questions or `restore napoleon_log1`
5. `connect tesla` - Switch to electric blue theme
6. `lore` - Trigger mysterious event
7. Explore all personalities and fragments

## 🏆 Hackathon Features

- ✅ Agentic AI with multiple personas
- ✅ Dynamic theme engine
- ✅ Corrupted data restoration
- ✅ Spooky terminal aesthetics
- ✅ Interactive command system
- ✅ Lore and mystery elements

Built with 💀 for Kiroween 2025

