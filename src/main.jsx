import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/header/Header.jsx'
import { Formulario } from './components/formulario/Formulario.jsx'
import { Org } from './components/Org/Org.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    {showForm && <Formulario />}
    <Org changeShow={ changeShow } />
  </React.StrictMode>,
)
