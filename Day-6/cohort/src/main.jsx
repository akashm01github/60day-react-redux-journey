
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import UserConext from './context/UserConext.jsx';


createRoot(document.getElementById('root')).render(
  <UserConext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserConext>
)
