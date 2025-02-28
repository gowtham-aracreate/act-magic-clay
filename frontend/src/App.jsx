import { useState } from 'react'
import './App.css'
import RegisterForm from './Component/RegisterForm'
import Register from './page/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './page/Login'
import Email from './page/Email'
import ToggleButton from './Component/ToggleButton'
import AddProduct from './Component/AddProduct'
import Payment from './Component/Payment'
<<<<<<< HEAD
import PaymentCard from './Component/PaymentCard'
import Home from './Component/Home'
=======
import Dashboard from './layout/Dashboard'
import OtpValidation from './Component/OtpValidation'


>>>>>>> dev
function App() {
  const [count, setCount] = useState(0)
  const showAllItems = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Register />} path='/register' />
        <Route element={<Login />} path='/login' />
        <Route element={<ToggleButton />} path='/togglebutton' />
        <Route element={<Email />} path='/email' />
        <Route element={<AddProduct />} path='/addproduct' />
        <Route element={<Payment />} path='/payment' />
<<<<<<< HEAD
        <Route element={<PaymentCard />} path='/paymentcard' />
        <Route element={<Home />} path='/home' />


=======
        <Route element={<Dashboard/>} path='/dashboard' />
        <Route element={<OtpValidation/>} path='/otpvalidation'/>
       
>>>>>>> dev
      </Routes>
    </BrowserRouter>

  )
}

export default App
