import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import CarForm from './sass/CarForm'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CarForm />
    {/* <App /> */}
  </React.StrictMode>,
)
