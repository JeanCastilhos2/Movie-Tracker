import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import App from './App'
import Home from '../src/pages/Home'
import Filme from '../src/pages/Filme'
import Buscar from './pages/Buscar'

import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route element={<App/>}>
             <Route path="/" element={<Home/>}/>
             <Route path="filme/:id" element={<Filme/>}/>
             <Route path="buscar" element={<Buscar/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
