// // import React from 'react'
// // import Image from "../images/img.png"
// // import Remove from "../images/remove.png"
// // import onClick from "@/utils/onClick";

// // const Cart = () => {
// //   return (
// //     <div className='bg-white flex w-[821px] h-[213px]'>
// //     <div className='w-[141px] h-[211px]'>
// //       <img src={Image}/>
// //       </div>
// //       <div className="flex flex-col mt-[50px]">
// //         <h1 className='text-2xl font-bold text-black ml-[40px]'>Calco</h1>
// //         <h2 className='flex flex-row font-semibold text-black ml-[40px]'>Seller: <span className='text-gray-600 '>Guke Technologies |</span></h2> </div>
// //         <h2 className="flex font-semibold text-black mt-[83px] ml-[5px]">Color: <span className='text-gray-600 font-medium'>Silver</span></h2>
// //         {/* <h2>Product Name</h2>
// //         <p>Price: $0.00</p>
// //         <p>Qty: 1</p>
// //         <button>Remove</button> */}
// //         <img className="w-[31px] h-[32px] mt-[130px] -ml-[280px]"src={Remove}/>
// //         <div className="flex flex-col justify-center text-lg font-semibold text-black pr-4 fixed top-12 left-[665px]">$80.00</div>
// //         <div> 
// //         <button
// //         onClick={onClick}
// //         className="w-12 h-12 flex items-center justify-center rounded-full bg-black hover:bg-black text-white shadow-md transition duration-300">+</button>   
// //         </div>
// //     </div>
// //   )
// // }

// // export default Cart

// import React, { useState } from "react";
// import Image from "../images/img.png";
// import RemoveIcon from "../images/remove.png";

// const Cart = () => {
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (type) => {
//     setQuantity((prev) => (type === "increase" ? prev + 1 : Math.max(1, prev - 1)));
//   };

//   return (
//     <div className="bg-gray-200">
//     <div className="bg-white flex w-[821px] h-[213px] p-4 rounded-lg shadow-md">
//       {/* Product Image */}
//       <div className="w-[141px] h-[211px]">
//         <img src={Image} alt="Product" className="rounded-lg" />
//       </div>

//       {/* Product Details */}
//       <div className="flex flex-col justify-between ml-6 flex-grow">
//         <div>
//           <h1 className="text-2xl font-bold text-black">Calco</h1>
//           <h2 className="text-black font-semibold">
//             Seller: <span className="text-gray-600">Guke Technologies</span> | Color: <span className="text-gray-600">Silver</span>
//           </h2>
//         </div>

//         {/* Price & Quantity Controls */}
//         <div className="flex items-center justify-between mt-4">
//           <span className="text-lg font-bold text-black">$80.00</span>

//           {/* Quantity Controls */}
//           <div className="flex items-center space-x-2">
//             <button
//               className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition duration-300"
//               onClick={() => handleQuantityChange("increase")}
//             >
//               +
//             </button>
//             <span className="text-lg font-semibold">{quantity}</span>
//             <button
//               className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition duration-300"
//               onClick={() => handleQuantityChange("decrease")}
//             >
//               -
//             </button>
//           </div>

//           {/* Remove Button */}
//           <img src={RemoveIcon} alt="Remove" className="w-8 h-8 cursor-pointer" />
//         </div>
//       </div>
//     </div>
//   </div> 
//   );
// };

// export default Cart;

// import React, { useState } from "react";
// import Image from "../images/img.png";
// import RemoveIcon from "../images/remove.png";

// const Cart = () => {
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (type) => {
//     setQuantity((prev) => (type === "increase" ? prev + 1 : Math.max(1, prev - 1)));
//   };

//   return (
//     <div className="bg-white flex w-[821px] h-[220px] rounded-lg shadow-md p-2 relative">
//       {/* Product Image */}
//       <div className="w-[141px] h-[211px]">
//         <img src={Image} alt="Product" className="rounded-lg w-full h-full object-cover" />
//       </div>

//       {/* Product Details */}
//       <div className="flex flex-col mt-8 ml-6">
//         <h1 className="text-2xl font-bold text-black">Calco</h1>
//         <h2 className="flex text-black font-semibold mt-1">
//           Seller: <span className="text-gray-600 ml-1">Guk Technologies</span> <span className="mx-1">|</span> 
//           Color: <span className="text-gray-600 ml-1">Silver</span>
//         </h2>
//       </div>

//       {/* Price & Quantity Controls */}
//       <div className="absolute top-[25%] right-[50px] transform -translate-y-1/2">
//         <span className="text-lg font-bold text-black">$80.00</span>
//       </div>

//       {/* Quantity Controls */}
//       <div className="absolute bottom-[100px] right-[40px] flex items-center space-x-3">
//         <button
//           className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition duration-300"
//           onClick={() => handleQuantityChange("increase")}
//         >
//         <div className="absolute bottom-[3px]">+</div>
//         </button>
//         <span className="text-lg font-semibold">{quantity}</span>
//         <button
//           className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition duration-300"
//           onClick={() => handleQuantityChange("decrease")}
//         >
//         <div className="absolute bottom-[3px]">-</div>
//         </button>
//       </div>

//       {/* Remove Button (Trash Icon) */}
//       <div className="absolute bottom-[65px] left-[172px] cursor-pointer">
//         <img src={RemoveIcon} alt="Remove" className="w-[31px] h-[32px]" />
//       </div>
//     </div>
//   );
// };

// export default Cart;

import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Cart = ({ name, seller, color, price, image, removeIcon, handleRemove }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : Math.max(1, prev - 1)));
  };

  return (
    <div className="bg-white flex w-[821px] h-[220px] rounded-lg shadow-md p-2 relative">
      {/* Product Image */}
      <div className="w-[141px] h-[211px]">
        <img src={image} alt="Product" className="rounded-lg w-full h-full object-cover" />
      </div>

      {/* Product Details */}
      <div className="flex flex-col mt-8 ml-6">
        <h1 className="text-2xl font-bold text-black">{name}</h1>
        <h2 className="flex text-black font-semibold mt-1">
          Seller: <span className="text-gray-600 ml-1">{seller}</span> <span className="mx-1">|</span> 
          Color: <span className="text-gray-600 ml-1">{color}</span>
        </h2>
      </div>

      {/* Price & Quantity Controls */}
      <div className="absolute top-[25%] right-[50px] transform -translate-y-1/2">
        <span className="text-lg font-bold text-black">${price}</span>
      </div>

      {/* Quantity Controls */}
      <div className="absolute bottom-[100px] right-[40px] flex items-center space-x-3">
        <button
          className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition duration-300"
          onClick={() => handleQuantityChange("increase")}
        >
          +
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button
          className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition duration-300"
          onClick={() => handleQuantityChange("decrease")}
        >
          -
        </button>
      </div>

      {/* Remove Button */}
      <div className="absolute bottom-[65px] left-[172px] cursor-pointer" onClick={handleRemove}>
        <img src={removeIcon} alt="Remove" className="w-[31px] h-[32px]" />
      </div>
    </div>
  );
};

export default Cart;
