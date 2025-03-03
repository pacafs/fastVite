import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NewApp from './NewApp.tsx';
// import App from './App.tsx'

// Make sure the root element exists
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
   {/* <App /> */}
    <NewApp />
  </StrictMode>,
)