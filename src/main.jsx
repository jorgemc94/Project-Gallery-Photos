
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SearchPage } from './pages/SearchPages/SearchPage'
import { FavoritePage } from './pages/FavoritePages/FavoritePage'
import { Provider } from 'react-redux'
import { Store } from './app/store'
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
      <Toaster position="top-right" toastOptions={{
            style: {
              backgroundColor: 'green',
              color: '#fff',
            }
          }}/>
        <Routes>
          <Route path='' element={<SearchPage/>} />
          <Route path='/FavoritePhoto' element = {<FavoritePage/>} />
        </Routes>
      </BrowserRouter>
    </Provider> 
  </React.StrictMode>,
)
