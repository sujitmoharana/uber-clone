import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
;
import { Bioprovider } from './context/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bioprovider>
    <App />
    </Bioprovider>
  </StrictMode>,
)
