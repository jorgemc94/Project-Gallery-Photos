
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FooterComponent } from './components/FooterComponents/FooterComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<FooterComponent/>}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
