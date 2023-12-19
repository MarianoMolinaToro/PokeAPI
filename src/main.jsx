import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import PokemonsProvider from './context/PokemonsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
    <PokemonsProvider>
    <App />
    </PokemonsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
