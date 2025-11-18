import { useState, useEffect } from 'react'

const BootScreen = ({ onBoot }) => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const asciiArt = `
   ██████╗ ██╗  ██╗ ██████╗ ███████╗████████╗
  ██╔════╝ ██║  ██║██╔═══██╗██╔════╝╚══██╔══╝
  ██║  ███╗███████║██║   ██║███████╗   ██║   
  ██║   ██║██╔══██║██║   ██║╚════██║   ██║   
  ╚██████╔╝██║  ██║╚██████╔╝███████║   ██║   
   ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝   ╚═╝   
                                              
   █████╗ ██████╗  ██████╗██╗  ██╗██╗██╗   ██╗███████╗
  ██╔══██╗██╔══██╗██╔════╝██║  ██║██║██║   ██║██╔════╝
  ███████║██████╔╝██║     ███████║██║██║   ██║█████╗  
  ██╔══██║██╔══██╗██║     ██╔══██║██║╚██╗ ██╔╝██╔══╝  
  ██║  ██║██║  ██║╚██████╗██║  ██║██║ ╚████╔╝ ███████╗
  ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝  ╚══════╝
  `

  return (
    <div className="w-full h-full bg-black text-green-400 flex flex-col items-center justify-center font-mono crt-effect relative">
      <div className="scanline"></div>
      <pre className="text-xs md:text-sm animate-flicker whitespace-pre">
        {asciiArt}
      </pre>
      <div className="mt-8 text-center">
        <p className="text-lg md:text-xl mb-2 animate-pulse">v1.0 - PORTAL TO THE LOST SOULS</p>
        <p className="text-sm text-green-600 mb-8">Reawaken the Dead...</p>
        {showButton && (
          <button
            onClick={onBoot}
            className="px-8 py-3 border-2 border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 text-lg animate-pulse"
          >
            [ ENTER TERMINAL ]
          </button>
        )}
      </div>
      <div className="absolute bottom-8 text-xs text-green-700">
        <p>WARNING: Connection to the afterlife may be unstable...</p>
      </div>
    </div>
  )
}

export default BootScreen
