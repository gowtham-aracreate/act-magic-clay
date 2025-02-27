// import React from 'react'
// import search from '../images/search.svg';

// const Navbar = ({children}) => {
//   return (
//     <div className='fixed top-0 right-0 w-4/5 h-16 bg-blue-500 flex items-center px-4'>
//       <div className="relative w-full max-w-xs">
//         <input
//           className='w-full h-10 pl-10 pr-3  text-gray-900 placeholder-gray-700 rounded-lg focus:outline-none'
//           type="search"
//           name="search"
//           placeholder="Search..."
//         />
//         <img
//           src={search}
//           alt="Search Icon"
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-700"
//         />
//         <label htmlFor="search" className="sr-only">Search</label>
//       </div>
//     </div>
//   )
// }

// export default Navbar
// import React from 'react'
// import search from '../images/search.svg';
// import Ellipse from '../images/Ellipse.svg';

// const Navbar = ({children}) => {
//   return (
//     <div className='fixed top-0 right-0 w-5/6 h-28 flex items-center px-4 bg-white rounded-br-3xl'>
//       <div className="relative w-full max-w-xs ml-60">
//         <input
//           className='w-full h-10 pl-14 pr-3 text-grey-900 placeholder-gray-400 border-b-2 border-gray-300 rounded-none focus:outline-none'
//           type="search"
//           name="search"
//           placeholder="Search"
//         />
//         <img
//           src={search}
//           alt="Search Icon"
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-700"
//         />
//         <label htmlFor="search" className="sr-only">Search</label>
        
        
//       </div>
//       <div><button className='rounded-lg bg-black text-white px-8 py-2'>Add Product</button></div>
//       <div className='mr-2 flex  fixed top-2 right-2'> 
//       <div className='flex-col pt-4'>
//       <p className='font-bold'>Ann</p>
//       <p>Buyer</p> 
//       </div>   
//       <img src={Ellipse} alt="Ellipse icon" />     
//       </div>
//     </div>
//   )
// }

// export default Navbar
import React from 'react';
import search from "../images/search.svg";
import Ellipse from "../images/Ellipse.svg"; 

const Header = ({ showAllItems }) => {
  let userInfo;

  if (showAllItems) {
    userInfo = (
      <>
        
        <div className='mr-2 flex fixed top-2 right-2 z-1'>
          <div className='flex-col pt-4'>
            <p className='font-bold'>Ann</p>
            <p>Seller</p>
          </div>
          <img src={Ellipse} alt="Ellipse icon" />
        </div>
      </>
      // <div className='mr-2 flex fixed top-2 right-2'>
      //   <div className='flex-col pt-4'>
      //     <p className='font-bold'>Ann</p>
      //     <p>Buyer</p>
      //   </div>
      //   <img src={Ellipse} alt="Ellipse icon" />
      // </div>
    );
  } else {
    userInfo = (
      <div className='mr-2 flex fixed top-2 right-2'>
        <div className='flex-col pt-4'>
          <p className='font-bold'>Ann</p>
          <p>Buyer</p>
        </div>
        <img src={Ellipse} alt="Ellipse icon" />
      </div>
    //   <>
    //   <button className='rounded-lg bg-black text-white px-8 py-2'>Add Product</button>
    //   <div className='mr-2 flex fixed top-2 right-2'>
    //     <div className='flex-col pt-4'>
    //       <p className='font-bold'>Ann</p>
    //       <p>Seller</p>
    //     </div>
    //     <img src={Ellipse} alt="Ellipse icon" />
    //   </div>
    // </>
    );
  }

  return (
    <div className='fixed top-0 right-0 w-5/6 h-24 flex items-center px-4 bg-white rounded-br-3xl'>
      <div className="relative w-full max-w-xs ml-60">
        <input
          className='w-full h-10 pl-14 pr-3 text-grey-900 placeholder-gray-400 border-b-2 border-gray-300 rounded-none focus:outline-none'
          type="search"
          name="search"
          placeholder="Search"
        />
        <img
          src={search}
          alt="Search Icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-700"
        />
        <label htmlFor="search" className="sr-only">Search</label>
      </div>
      <button  className='rounded-lg bg-black text-white px-8 py-2'><a href="/addproduct">Add Product</a></button>
      
      {userInfo}
    </div>
  );
};

export default Header;
