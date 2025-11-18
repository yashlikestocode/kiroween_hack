import { useState } from 'react'
import BootScreen from './components/BootScreen'
import Terminal from './components/Terminal'
import { ThemeProvider } from './components/ThemeProvider'

function App() {
  const [booted, setBooted] = useState(false)

  return (
    <ThemeProvider>
      <div className="w-screen h-screen overflow-hidden">
        {!booted ? (
          <BootScreen onBoot={() => setBooted(true)} />
        ) : (
          <Terminal />
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
