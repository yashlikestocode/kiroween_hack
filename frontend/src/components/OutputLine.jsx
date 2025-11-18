const OutputLine = ({ line, theme }) => {
  const getLineStyle = () => {
    switch (line.type) {
      case 'input':
        return { color: theme.textColor }
      case 'system':
        return { color: theme.accent }
      case 'ghost':
        return { 
          color: theme.textColor, 
          textShadow: `0 0 5px ${theme.accent}`,
          fontStyle: 'italic'
        }
      case 'error':
        return { color: '#ff4444' }
      case 'fragment':
        return { color: theme.accent, opacity: 0.7 }
      case 'restored':
        return { 
          color: theme.textColor,
          backgroundColor: `${theme.accent}22`,
          padding: '8px',
          borderLeft: `3px solid ${theme.accent}`
        }
      case 'lore':
        return { 
          color: '#ff00ff',
          textShadow: '0 0 10px #ff00ff',
          animation: 'glitch 1s infinite'
        }
      default:
        return { color: theme.textColor }
    }
  }

  return (
    <div style={getLineStyle()} className="whitespace-pre-wrap break-words">
      {line.text}
    </div>
  )
}

export default OutputLine
