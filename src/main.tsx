import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css';
import App from './App.tsx'
import { MantineProvider, createTheme } from '@mantine/core';

// Create a custom theme
const theme = createTheme({
  // You can customize colors for dark mode
  colors: {
    // Custom color palette for dark mode
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5c5f66',
      '#373A40',
      '#2C2E33',
      '#25262b',
      '#1A1B1E',
      '#141517',
      '#101113',
    ],
    // You can add more custom colors here
  },
  primaryColor: 'cyan',
  // Other theme customizations
  fontFamily: 'Verdana, sans-serif',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>,
)

