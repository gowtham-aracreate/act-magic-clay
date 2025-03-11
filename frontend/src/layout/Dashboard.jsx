import React from 'react';
import card1 from '../assets/images/card1.svg';
import DashboardLayout from './DashboardLayout';
import card2 from '../assets/images/card2.svg';
import card3 from '../assets/images/card3.svg';
import card4 from '../assets/images/card4.svg';
import card5 from '../assets/images/card5.svg';

const Dashboard = () => {
  
  return (
   <DashboardLayout>
    
    <div className='relative grid grid-rows-5 grid-cols-5 w-5/6 ml-60 mt-24 h-full -z-1 bg-gray-200'>
    <div className="relative w-60">
    <img 
      src={card1} 
      alt="Product" 
      className=" mt-4"
    />
    <div className="absolute inset-x-0 bg-gray-50 bottom-12 opacity-55 text-black ml-8 w-44 h-24 px-6 py-4 rounded-xl">
      <h2 className="text-3xl font-bold">Calco</h2>
      <p className="text-2xl text-gray-400">$ 89.00</p>
    </div>
  </div>
  <div className="relative w-60 ">
    <img 
      src={card2} 
      alt="Product" 
      className="mt-4"
    />
    <div className="absolute inset-x-0 bg-gray-50 bottom-12 opacity-55 text-black ml-8 w-44 h-24 px-8 py-4 rounded-xl">
      <h2 className="text-3xl font-bold">Calco</h2>
      <p className="text-2xl text-gray-400">$ 89.00</p>
    </div>
  </div>
  <div className="relative w-60 ">
    <img 
      src={card3} 
      alt="Product" 
      className="mt-4"
    />
    <div className="absolute inset-x-0 bg-gray-50 bottom-12 opacity-55 text-black ml-8 w-44 h-24 px-6 py-4 rounded-xl">
      <h2 className="text-3xl font-bold">Calco</h2>
      <p className="text-2xl text-gray-400">$ 89.00</p>
    </div>
  </div>
  <div className="relative w-60 ">
    <img 
      src={card4} 
      alt="Product" 
      className=" w-52 h-62 mt-8"
    />
    <div className="absolute inset-x-0 bg-gray-50 bottom-12 opacity-55 text-black ml-4 w-44 h-24 px-8 py-4 rounded-xl">
      <h2 className="text-3xl font-bold">Calco</h2>
      <p className="text-2xl text-gray-400">$ 89.00</p>
    </div>
  </div>
  <div className="relative w-60 mt-4">
    <img 
      src={card5} 
      alt="Product" 
      className=""
    />
    <div className="absolute inset-x-0 bg-gray-50 bottom-12 opacity-55 text-black ml-8 w-44 h-24 px-8 py-4 rounded-xl">
      <h2 className="text-3xl font-bold">Calco</h2>
      <p className="text-2xl text-gray-400">$ 89.00</p>
    </div>
  </div>
  <div className="relative w-60 ">
    <img 
      src={card1} 
      alt="Product" 
      className="mt-2"
    />
    <div className="absolute inset-x-0 bg-gray-50 bottom-14 opacity-55 text-black ml-8 w-44 h-24 px-8 py-4 rounded-xl">
      <h2 className="text-3xl font-bold">Calco</h2>
      <p className="text-2xl text-gray-400">$ 89.00</p>
    </div>
  </div>
  <div className="relative w-60 ">
    <img 
      src={card2} 
      alt="Product" 
      className="mt-1"
    />
    <div className="absolute inset-x-0 bg-gray-50 bottom-14 opacity-55 text-black ml-8 w-44 h-24 px-8 py-4 rounded-xl">
      <h2 className="text-3xl font-bold">Calco</h2>
      <p className="text-2xl text-gray-400">$ 89.00</p>
    </div>
  </div>
  <div className="relative w-60 ">
    <img 
      src={card3} 
      alt="Product" 
      className="mt-1"
    />
    <div className="absolute inset-x-0 bg-gray-50 bottom-16 opacity-55 text-black ml-8 w-44 h-24 px-8 py-2 rounded-xl">
      <h2 className="text-3xl text-black font-bold">Calco</h2>
      <p className="text-2xl text-gray-400">$ 89.00</p>
    </div>
  </div>
  <div className="relative w-60 ">
    <img 
      src={card4} 
      alt="Product" 
      className=" w-52 h-64 mt-6"
    />
    <div className="absolute inset-x-0 bg-gray-50 bottom-12 opacity-55 text-black ml-4 w-44 h-24 px-8 py-4 rounded-xl">
      <h2 className="text-3xl text-black font-bold">Calco</h2>
      <p className="text-2xl text-gray-400">$ 89.00</p>
    </div>
  </div>
  <div className="relative w-60 ">
    <img 
      src={card5} 
      alt="Product" 
      className="mt-2"
    />
    <div className="absolute inset-x-0 bg-gray-50 bottom-12 opacity-55 text-black ml-8 w-44 h-24 px-8 py-4 rounded-xl">
      <h2 className="text-3xl font-bold">Calco</h2>
      <p className="text-2xl text-gray-400">$ 89.00</p>
    </div>
  </div>
  <div className="relative w-60 ">
    <img 
      src={card1} 
      alt="Product" 
      className="mt-4"
    />
    <div className="absolute inset-x-0 bg-gray-50 bottom-12 opacity-55 text-black ml-8 w-44 h-24 px-8 py-4 rounded-xl">
      <h2 className="text-3xl font-bold">Calco</h2>
      <p className="text-2xl text-gray-400">$ 89.00</p>
    </div>
  </div>
  <div className="relative w-60 ">
    <img 
      src={card2} 
      alt="Product" 
      className="mt-4"
    />
    <div className="absolute inset-x-0 bg-gray-50 bottom-12 opacity-55 text-black ml-8 w-44 h-24 px-8 py-4 rounded-xl">
      <h2 className="text-3xl font-bold">Calco</h2>
      <p className="text-2xl text-gray-400">$ 89.00</p>
    </div>
  </div>
  </div>
  
  </DashboardLayout>
  );
};

export default Dashboard;
