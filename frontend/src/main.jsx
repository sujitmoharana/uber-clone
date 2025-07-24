import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Bioprovider } from './context/UserContext.jsx';
import { CaptainProvider } from './context/captaincontext.jsx';
createRoot(document.getElementById('root')).render(
  <> {/* here i delete this strict mode for twice rending so i have logout problem ...here 
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{
    headers: {
        Authorization: `Bearer ${token}`  // ✅ Capital B
      }
})  this code run twice so i have problem thats why i delete it */}
<CaptainProvider>
    <Bioprovider>
    <App />
    </Bioprovider>
    </CaptainProvider>
  </>,
)
