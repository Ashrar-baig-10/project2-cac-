import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
function Myapp(){
  return(
    <div>
      <h1>custom app</h1>
    </div>
  )
}
createRoot(document.getElementById('root')).render(
  
    <Myapp />
  
)
