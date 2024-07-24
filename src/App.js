import React, { useState } from 'react'

import Home from './Home'
import { Route , Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Cart from './Cart'
import PaymentSuccess from './PaymentSuccess'
import PaymentFailed from './PaymentFailure'

const App = () => {
  
  return (
    <>
      <Navbar />
      <Routes>
       
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<PaymentSuccess />} />
        <Route path='/cancel' element={ <PaymentFailed/>} />
      </Routes>
    </>
  )
}

export default App