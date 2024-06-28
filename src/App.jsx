import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import './global.css'
import PaymentPage from './pages/payment/PaymentPage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/packpayment' element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
