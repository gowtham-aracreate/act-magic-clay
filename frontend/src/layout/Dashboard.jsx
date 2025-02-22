import React from 'react';
import cart1 from '../images/cart1.svg';


const Dashboard = () => {
  
  return (
    <div className='top-24 left-72 fixed'>
    <div className="relative w-60 ">
    <img 
      src={cart1} 
      alt="Product" 
      className=""
    />
    <div className="absolute inset-x-0 bg-gray-50 bottom-12 opacity-55 text-black ml-8 w-44 h-24 px-8 py-4 rounded-xl">
      <h2 className="text-3xl font-bold">Calco</h2>
      <p className="text-2xl text-gray-400">$ 89.00</p>
    </div>
  </div>
  </div>
  );
};

export default Dashboard;
