import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Bowlers from './Bowlers.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Bowlers />
  </StrictMode>,
)
