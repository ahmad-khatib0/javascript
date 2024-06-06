import React, { useContext } from 'react'

export default function Toggle() {
  const theme = useContext(ThemeContext)

  return (
    <label className="switch">
      <input type="checkbox" onClick={theme.toggleTheme} />
      <span className="slider round" />
    </label>
  )
}
