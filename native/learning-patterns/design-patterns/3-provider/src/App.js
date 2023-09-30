import React, { useContext, useState } from 'react'
import './styles.css'

import List from './List'
import Toggle from './Toggle'

export const themes = {
  light: {
    background: '#fff',
    color: '#000',
  },
  dark: {
    background: '#171717',
    color: '#fff',
  },
}

export const ThemeContext = React.createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme(theme == 'light' ? 'dark' : 'light')
  }

  const providerValue = { theme: themes[theme], toggleTheme }
  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>
}

export default function App() {
  const theme = useContext(ThemeContext)
  return (
    <div className={`App theme-${theme.theme}`}>
      <ThemeProvider>
        <Toggle />
        <List />
      </ThemeProvider>
    </div>
  )
}
