import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import posthog from 'posthog-js' 

// Ініціалізація PostHog 
posthog.init('phc_sWRXUkzBAD7Acjex9aBoCiaiWfmSCa6dZSTocEzKyzu5', {
    api_host: 'https://us.i.posthog.com', 
    person_profiles: 'always'
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)