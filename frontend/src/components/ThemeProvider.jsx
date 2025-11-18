import { createContext, useContext, useState } from 'react'
import themes from '../themes/themes.json'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('default')

  const theme = themes[currentTheme] || themes.default

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, currentTheme }}>
      <div 
        className="w-full h-full transition-colors duration-500"
        style={{ 
          backgroundColor: theme.background,
          color: theme.textColor 
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
