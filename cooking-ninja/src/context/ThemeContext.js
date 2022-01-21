import {creatContext, createContext} from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({children}) {

  // custon logic
  
  return (
    <ThemeContext.Provider value={{color: 'blue'}}>
      {children}
    </ThemeContext.Provider>
  )
}