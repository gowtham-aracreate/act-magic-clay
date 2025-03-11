// import { useState } from 'react';
import './App.css';
import Register from './page/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './page/Login';
import Email from './page/Email';
import ToggleButton from './Component/ToggleButton';
import AddProduct from './Component/AddProduct';
import Payment from './Component/Payment';
import Dashboard from './layout/Dashboard';
import OtpValidation from './Component/OtpValidation';
import Home from './Component/Home'; // Ensure Home component is imported
import Cart from './Component/Cart';
import Transaction from './Component/Transaction';
import Summary from './Component/Summary';

function App() {
  // const [count, setCount] = useState(0);
  // const showAllItems = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Register />} path='/register' />
        <Route element={<Login />} path='/login' />
        <Route element={<ToggleButton />} path='/togglebutton' />
        <Route element={<Email />} path='/email' />
        <Route element={<AddProduct />} path='/addproduct' />
        <Route element={<Payment />} path='/payment' />
        <Route element={<Dashboard />} path='/dashboard' />
        <Route element={<OtpValidation />} path='/otpvalidation' />
        <Route element={<Home />} path='/home' /> {/* Ensure Home route is added */}
        <Route element={<Cart />} path='/cart' />
        <Route element={<Transaction />} path='/transaction' />
        <Route element={<Summary />} path='/summary' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;