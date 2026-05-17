import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import fonts to use in css files
import "@fontsource/outfit";
import "@fontsource/roboto";
import "@fontsource/playfair-display";
import "@fontsource/playfair";
import '@fontsource/ibm-plex-mono';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
