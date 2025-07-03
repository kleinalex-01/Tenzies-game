import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { ThemeProvider } from './Context/ThemeContext.tsx'
import { DiceProvider } from './Context/diceContext.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <DiceProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </DiceProvider>
  </ThemeProvider>
)
