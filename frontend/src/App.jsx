import './App.css'
import Register from './page/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './page/Login'
import Email from './page/Email'
import ToggleButton from './Component/ToggleButton'
import AddProduct from './Component/AddProduct'
import Payment from './Component/Payment'
import Transaction from './Component/Transaction'
import Summary from './Component/Summary'
import Cart from './Component/Cart'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Register />} path='/register' />
        <Route element={<Login />} path='/login' />
        <Route element={<ToggleButton />} path='/togglebutton' />
        <Route element={<Email />} path='/email' />
        <Route element={<AddProduct />} path='/addproduct' />
        <Route element={<Payment />} path='/payment' />
        <Route element={<Transaction />} path='/transaction' />
        <Route element={<Summary />} path='/summary' />
        <Route element={<Cart />} path='/cart' />

      </Routes>
    </BrowserRouter>

  )
}

export default App
