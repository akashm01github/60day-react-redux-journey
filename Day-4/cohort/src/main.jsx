import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import {ToastContainer} from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <UserContext>
        <App />     
        <ToastContainer position='top-right'/>
    </UserContext>
   
  
)
