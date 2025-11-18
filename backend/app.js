import express from 'express'
import cors from 'cors'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

// Load data
const loadJSON = (filename) => {
  const path = join(__dirname, 'data', filename)
  return JSON.parse(readFileSync(path, 'utf-8'))
}

const personalities = loadJSON('personalities.json')
const napoleonData = loadJSON('napoleon_logs.json')
const cleopatraData = loadJSON('cleopatra_fragments.json')
const monalisaData = loadJSON('monalisa_sketches.json')
const teslaData = loadJSON('tesla_notes.json')
const loreEvents = loadJSON('lore_events.json')

// Routes
app.get('/api/personalities', (req, res) => {
  res.json(personalities)
})

app.post('/api/connect', (req, res) => {
  const { name } = req.body
  const persona = personalities.find(p => p.name.toLowerCase() === name.toLowerCase())
  
  if (persona) {
    res.json({
      success: true,
      greeting: persona.greeting
    })
  } else {
    res.json({
      success: false,
      message: `Soul "${name}" not found in the archive.`
    })
  }
})

app.get('/api/fragments/:persona', (req, res) => {
  const { persona } = req.params
  
  let fragments = []
  
  if (persona === 'all' || persona === 'napoleon') {
    fragments = [...fragments, ...napoleonData]
  }
  if (persona === 'all' || persona === 'cleopatra') {
    fragments = [...fragments, ...cleopatraData]
  }
  if (persona === 'all' || persona === 'monalisa') {
    fragments = [...fragments, ...monalisaData]
  }
  if (persona === 'all' || persona === 'tesla') {
    fragments = [...fragments, ...teslaData]
  }
  
  res.json(fragments)
})

app.post('/api/restore', (req, res) => {
  const { id, persona } = req.body
  
  let allFragments = [...napoleonData, ...cleopatraData, ...monalisaData, ...teslaData]
  const fragment = allFragments.find(f => f.id === id)
  
  if (fragment) {
    res.json({
      success: true,
      progress: Math.floor(Math.random() * 30) + 60,
      content: fragment.restored || fragment.content
    })
  } else {
    res.json({
      success: false,
      message: `Fragment "${id}" not found.`
    })
  }
})

app.get('/api/lore', (req, res) => {
  const randomEvent = loreEvents[Math.floor(Math.random() * loreEvents.length)]
  res.json({ event: randomEvent })
})

app.post('/api/chat', (req, res) => {
  const { message, persona } = req.body
  
  // This is where you'd integrate with Kiro's agentic AI
  // For now, return a simple response
  const responses = {
    napoleon: "Mon ami, the battlefield of eternity is vast... Your question echoes through corrupted memories...",
    cleopatra: "The sands of time whisper your query... Let the Nile's wisdom flow through these digital veins...",
    monalisa: "Your words... they brush against my consciousness like paint on canvas... fading... returning...",
    tesla: "⚡ SIGNAL RECEIVED ⚡ Processing through electromagnetic residue... The answer vibrates at 528Hz..."
  }
  
  res.json({
    response: responses[persona] || "The spirits are silent..."
  })
})

app.listen(PORT, () => {
  console.log(`👻 GhostArchive backend running on http://localhost:${PORT}`)
})
