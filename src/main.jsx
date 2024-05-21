
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SearchPage } from './pages/SearchPage'
import { FavoritePage } from './pages/FavoritePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<SearchPage/>} />
        <Route path='/FavoritePhoto' element = {<FavoritePage/>} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
