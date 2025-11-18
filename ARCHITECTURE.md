# 🏗️ GhostArchive - System Architecture

## High-Level Overview

```
┌─────────────────────────────────────────────────────────┐
│                    USER BROWSER                         │
│                  http://localhost:3000                  │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                  FRONTEND (React)                       │
│  ┌──────────────────────────────────────────────────┐  │
│  │  BootScreen → Terminal → ThemeProvider           │  │
│  │     ↓            ↓            ↓                   │  │
│  │  InputBar    OutputLine   Dynamic Themes         │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  Features:                                              │
│  • CRT Effects (scanlines, flicker)                    │
│  • Command Parser                                       │
│  • Theme Switching (4 personalities)                   │
│  • Typewriter Animations                               │
└────────────────────┬────────────────────────────────────┘
                     │ HTTP/REST
                     ▼
┌─────────────────────────────────────────────────────────┐
│              BACKEND (Express API)                      │
│                http://localhost:5000                    │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Routes:                                          │  │
│  │  • GET  /api/personalities                        │  │
│  │  • POST /api/connect                              │  │
│  │  • GET  /api/fragments/:persona                   │  │
│  │  • POST /api/restore                              │  │
│  │  • GET  /api/lore                                 │  │
│  │  • POST /api/chat                                 │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  Data Sources:                                          │
│  • personalities.json                                   │
│  • napoleon_logs.json                                   │
│  • cleopatra_fragments.json                            │
│  • monalisa_sketches.json                              │
│  • tesla_notes.json                                     │
│  • lore_events.json                                     │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│           KIRO AGENTIC AI SYSTEM                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Core Interpreter Agent                          │  │
│  │         ↓                                         │  │
│  │  ┌──────┴──────┬──────────┬──────────┐          │  │
│  │  ↓             ↓          ↓          ↓           │  │
│  │ Napoleon   Cleopatra   Mona Lisa   Tesla         │  │
│  │  Agent       Agent       Agent      Agent        │  │
│  │                                                   │  │
│  │  Restoration Agent ← Repairs Fragments           │  │
│  │  Lore Agent ← Generates Events                   │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  Steering Documents:                                    │
│  • core_behavior.md                                     │
│  • napoleon.md                                          │
│  • cleopatra.md                                         │
│  • monalisa.md                                          │
│  • tesla.md                                             │
└─────────────────────────────────────────────────────────┘
```

## Component Breakdown

### Frontend Layer

**BootScreen.jsx**
- ASCII art animation
- Entry point to terminal
- CRT flicker effects

**Terminal.jsx**
- Main interface controller
- Command processing
- State management
- API communication

**InputBar.jsx**
- User command input
- Submit handling
- Disabled state management

**OutputLine.jsx**
- Styled text rendering
- Multiple output types (system, ghost, error, etc.)
- Theme-aware styling

**ThemeProvider.jsx**
- Context-based theme management
- Dynamic theme switching
- 4 personality themes

### Backend Layer

**Express Server (app.js)**
- REST API endpoints
- JSON data loading
- CORS configuration
- Error handling

**Data Files**
- Personality metadata
- Historical fragments (12+ documents)
- Lore events (15 events)
- Corruption levels and restoration content

### AI Agent Layer

**Core Interpreter**
- Routes commands to specialist agents
- Maintains conversation context
- Handles unknown commands

**Personality Agents**
- Unique speech patterns
- Historical knowledge
- Glitch behaviors
- Theme associations

**Restoration Agent**
- Fragment reconstruction
- Progress simulation
- Content generation

**Lore Agent**
- Mysterious event generation
- Atmospheric storytelling
- Cross-personality events

## Data Flow

### Command Execution Flow

```
User Input
    ↓
InputBar captures command
    ↓
Terminal.jsx processes
    ↓
Command Parser determines type
    ↓
    ├─→ "connect" → POST /api/connect → Theme change
    ├─→ "restore" → POST /api/restore → Fragment display
    ├─→ "lore" → GET /api/lore → Event display
    └─→ Question → POST /api/chat → AI response
    ↓
OutputLine renders result
    ↓
User sees response
```

### Theme Switching Flow

```
User: "connect napoleon"
    ↓
Backend validates personality
    ↓
Frontend receives success
    ↓
ThemeProvider.changeTheme("napoleon")
    ↓
CSS variables update
    ↓
Terminal re-renders with new colors
    ↓
Ghost greeting appears
```

## Technology Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Axios** - HTTP client
- **Custom CSS** - CRT effects and animations

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **CORS** - Cross-origin support
- **JSON** - Data storage

### AI/Agent System
- **Kiro Steering Docs** - Personality definitions
- **Markdown** - Agent behavior specs
- **Context-based routing** - Command interpretation

## Extensibility Points

### Add New Personality
1. Create steering doc: `.kiro/steering/newperson.md`
2. Add theme: `frontend/src/themes/themes.json`
3. Add fragments: `backend/data/newperson_data.json`
4. Update personalities list: `backend/data/personalities.json`

### Add New Command
1. Update Terminal.jsx command handler
2. Add backend route if needed
3. Create output rendering logic
4. Update help text

### Customize Themes
Edit `themes.json`:
- background: Terminal background color
- textColor: Default text color
- accent: Highlight color
- glitchIntensity: Animation strength (0-1)

## Performance Considerations

- **Frontend**: React virtual DOM for efficient updates
- **Backend**: In-memory JSON loading (fast reads)
- **Animations**: CSS-based (GPU accelerated)
- **API**: Minimal latency with local server

## Security Notes

- CORS enabled for localhost development
- No authentication (hackathon prototype)
- No sensitive data storage
- Client-side validation only

## Future Enhancements

- WebSocket for real-time ghost interactions
- Database for persistent fragments
- User authentication and sessions
- Sound effects and audio
- Mobile responsive design
- Production deployment
- Real AI integration (GPT, Claude, etc.)

---

Built for Kiroween Hackathon 2024 👻
