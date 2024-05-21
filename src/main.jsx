
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HeaderComponent } from './components/HeaderComponents/HeaderComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HeaderComponent/>}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
