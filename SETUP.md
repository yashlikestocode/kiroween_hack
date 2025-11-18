# 🚀 GhostArchive Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies

```bash
# From the kiroween_hack directory
npm run install-all
```

This will install dependencies for:
- Root workspace
- Frontend (React + Vite + Tailwind)
- Backend (Express)

### 2. Start Development Servers

```bash
# Run both frontend and backend concurrently
npm run dev
```

Or run them separately:

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm run dev
```

### 3. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## Project Structure

```
kiroween_hack/
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── themes/          # Theme configurations
│   │   └── App.jsx          # Main app
│   └── package.json
├── backend/
│   ├── data/                # Historical fragments & personalities
│   ├── app.js               # Express server
│   └── package.json
├── .kiro/
│   └── steering/            # AI agent personality docs
└── package.json             # Root workspace
```

## Testing the Application

1. **Boot Screen**: Click "ENTER TERMINAL"
2. **Help Command**: Type `help` to see all commands
3. **List Souls**: `show personalities`
4. **Connect**: `connect napoleon` (or cleopatra, monalisa, tesla)
5. **View Fragments**: `show lost_files`
6. **Restore**: `restore napoleon_log1`
7. **Lore Event**: `lore`
8. **Switch Persona**: `connect tesla`

## Troubleshooting

### Port Already in Use
If port 3000 or 5000 is taken:
- Frontend: Edit `frontend/vite.config.js` and change port
- Backend: Edit `backend/app.js` and change PORT constant

### Dependencies Not Installing
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules frontend/node_modules backend/node_modules
npm run install-all
```

### CORS Errors
Make sure backend is running on port 5000 and frontend proxy is configured in `vite.config.js`

## Development Tips

- **Hot Reload**: Both frontend and backend support hot reload
- **Theme Testing**: Modify `frontend/src/themes/themes.json`
- **Add Personalities**: Edit `backend/data/personalities.json`
- **New Fragments**: Add to respective JSON files in `backend/data/`
- **AI Behavior**: Modify steering docs in `.kiro/steering/`

## Production Build

```bash
# Build frontend
cd frontend
npm run build

# Serve with backend
cd ../backend
npm start
```

## Next Steps

1. Integrate with Kiro's agentic AI for real personality responses
2. Add sound effects for atmosphere
3. Implement more complex fragment restoration logic
4. Add authentication/session management
5. Deploy to Vercel/Netlify (frontend) + Railway/Render (backend)

Happy haunting! 👻
