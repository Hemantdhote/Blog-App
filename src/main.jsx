import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Register from './components/NavBar.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<Register/>}/>
    </Routes>
  </Router>
)
