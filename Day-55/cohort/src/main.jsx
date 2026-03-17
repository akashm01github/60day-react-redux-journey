import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Wraper from './Wraper.jsx'

createRoot(document.getElementById('root')).render(
  <Wraper>
    <App />
  </Wraper>
)
