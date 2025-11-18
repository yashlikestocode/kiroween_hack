import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import OutputLine from './OutputLine'
import InputBar from './InputBar'
import { useTheme } from './ThemeProvider'

const Terminal = () => {
  const [lines, setLines] = useState([])
  const [currentPersona, setCurrentPersona] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const terminalRef = useRef(null)
  const { theme, changeTheme } = useTheme()

  useEffect(() => {
    setLines([
      { type: 'system', text: 'GHOSTARCHIVE TERMINAL v1.0 initialized...' },
      { type: 'system', text: 'Connection to the ethereal plane established.' },
      { type: 'system', text: '' },
      { type: 'system', text: 'Type "help" for available commands.' },
      { type: 'system', text: '' },
    ])
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  const addLine = (type, text) => {
    setLines(prev => [...prev, { type, text, timestamp: Date.now() }])
  }

  const handleCommand = async (input) => {
    const command = input.trim().toLowerCase()
    addLine('input', `> ${input}`)

    if (!command) return

    setIsProcessing(true)

    try {
      if (command === 'help') {
        addLine('system', '')
        addLine('system', '=== AVAILABLE COMMANDS ===')
        addLine('system', 'help                    - Show this help message')
        addLine('system', 'show personalities      - List available souls')
        addLine('system', 'connect <name>          - Connect to a ghost persona')
        addLine('system', 'disconnect              - Disconnect from current persona')
        addLine('system', 'show lost_files         - View corrupted fragments')
        addLine('system', 'restore <id>            - Restore a lost fragment')
        addLine('system', 'lore                    - Trigger mysterious events')
        addLine('system', 'clear                   - Clear terminal')
        addLine('system', '')
      } else if (command === 'clear') {
        setLines([])
      } else if (command === 'show personalities') {
        const response = await axios.get('/api/personalities')
        addLine('system', '')
        addLine('system', '=== AVAILABLE SOULS ===')
        response.data.forEach(p => {
          addLine('ghost', `${p.name.toUpperCase()} - ${p.description}`)
        })
        addLine('system', '')
      } else if (command.startsWith('connect ')) {
        const name = command.replace('connect ', '').trim()
        const response = await axios.post('/api/connect', { name })
        
        if (response.data.success) {
          setCurrentPersona(name)
          changeTheme(name)
          addLine('system', '')
          addLine('system', `[CONNECTING TO ${name.toUpperCase()}...]`)
          addLine('system', '[REALITY DISTORTION DETECTED]')
          addLine('system', '[THEME RECALIBRATING...]')
          addLine('system', '')
          
          setTimeout(() => {
            addLine('ghost', response.data.greeting)
            addLine('system', '')
          }, 500)
        } else {
          addLine('error', response.data.message)
        }
      } else if (command === 'disconnect') {
        if (currentPersona) {
          addLine('system', `Disconnecting from ${currentPersona}...`)
          setCurrentPersona(null)
          changeTheme('default')
          addLine('system', 'Connection severed.')
          addLine('system', '')
        } else {
          addLine('error', 'No active connection.')
        }
      } else if (command === 'show lost_files') {
        const persona = currentPersona || 'all'
        const response = await axios.get(`/api/fragments/${persona}`)
        addLine('system', '')
        addLine('system', '=== CORRUPTED FRAGMENTS ===')
        response.data.forEach(f => {
          addLine('fragment', `[${f.id}] ${f.title} - ${f.corruption}% corrupted`)
        })
        addLine('system', '')
      } else if (command.startsWith('restore ')) {
        const id = command.replace('restore ', '').trim()
        addLine('system', '')
        addLine('system', `[INITIATING RESTORATION PROTOCOL...]`)
        addLine('system', `[SCANNING FRAGMENT: ${id}]`)
        
        const response = await axios.post('/api/restore', { id, persona: currentPersona })
        
        if (response.data.success) {
          addLine('system', `[RECONSTRUCTION: ${response.data.progress}%]`)
          addLine('system', `[STITCHING GHOST RESIDUE...]`)
          addLine('system', '')
          addLine('restored', response.data.content)
          addLine('system', '')
        } else {
          addLine('error', response.data.message)
        }
      } else if (command === 'lore') {
        const response = await axios.get('/api/lore')
        addLine('system', '')
        addLine('lore', '[ANOMALY DETECTED]')
        addLine('lore', response.data.event)
        addLine('system', '')
      } else {
        // Send to current persona or general AI
        if (currentPersona) {
          const response = await axios.post('/api/chat', { 
            message: input, 
            persona: currentPersona 
          })
          addLine('ghost', response.data.response)
          addLine('system', '')
        } else {
          addLine('error', 'Unknown command. Type "help" for available commands.')
        }
      }
    } catch (error) {
      addLine('error', `Error: ${error.response?.data?.message || error.message}`)
    }

    setIsProcessing(false)
  }

  return (
    <div 
      className="w-full h-full flex flex-col font-mono crt-effect relative overflow-hidden"
      style={{ backgroundColor: theme.background }}
    >
      <div className="scanline"></div>
      
      {/* Header */}
      <div 
        className="px-4 py-2 border-b-2 flex justify-between items-center"
        style={{ 
          borderColor: theme.accent,
          backgroundColor: `${theme.background}dd`
        }}
      >
        <span style={{ color: theme.accent }}>GHOSTARCHIVE TERMINAL</span>
        {currentPersona && (
          <span 
            className="animate-pulse"
            style={{ color: theme.accent }}
          >
            [CONNECTED: {currentPersona.toUpperCase()}]
          </span>
        )}
      </div>

      {/* Output Area */}
      <div 
        ref={terminalRef}
        className="flex-1 overflow-y-auto px-4 py-2 space-y-1"
      >
        {lines.map((line, idx) => (
          <OutputLine key={idx} line={line} theme={theme} />
        ))}
        {isProcessing && (
          <div style={{ color: theme.accent }} className="animate-pulse">
            Processing...
          </div>
        )}
      </div>

      {/* Input Bar */}
      <InputBar onSubmit={handleCommand} theme={theme} disabled={isProcessing} />
    </div>
  )
}

export default Terminal
