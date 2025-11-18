import { useState } from 'react'

const InputBar = ({ onSubmit, theme, disabled }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() && !disabled) {
      onSubmit(input)
      setInput('')
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="border-t-2 px-4 py-2 flex items-center"
      style={{ borderColor: theme.accent }}
    >
      <span style={{ color: theme.accent }} className="mr-2">{'>'}</span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
        className="flex-1 bg-transparent outline-none"
        style={{ color: theme.textColor }}
        placeholder="Enter command..."
        autoFocus
      />
    </form>
  )
}

export default InputBar
