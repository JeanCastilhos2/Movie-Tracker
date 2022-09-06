import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';
import Home from '../src/pages/Home/Index';
import Titulo from '../src/pages/Titulo/Index';
import MeusFilmes from '../src/pages/MeusFilmes/Index';
import TopFilmes from '../src/pages/TopFilmes/Index';
import Buscar from '../src/pages/Buscar/Index';

import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route element={<App/>}>
             <Route path="/" element={<Home/>}/>
             <Route path="meusfilmes" element={<MeusFilmes/>}/>
             <Route path="topfilmes" element={<TopFilmes/>}/>
             <Route path="titulo/:id" element={<Titulo/>}/>
             <Route path="buscar" element={<Buscar/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
