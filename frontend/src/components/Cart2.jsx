import React, { useState } from "react";
import Image from "../images/img2.png";
import RemoveIcon from "../images/remove.png";

const Cart2 = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : Math.max(1, prev - 1)));
  };

  return (
    <div className="bg-white flex w-[821px] h-[220px] rounded-lg shadow-md p-2 relative mt-[25px]">
      {/* Product Image */}
      <div className="w-[141px] h-[211px]">
        <img src={Image} alt="Product" className="rounded-lg w-full h-full object-cover" />
      </div>

      {/* Product Details */}
      <div className="flex flex-col mt-8 ml-6">
        <h1 className="text-2xl font-bold text-black">Calco</h1>
        <h2 className="flex text-black font-semibold mt-1">
          Seller: <span className="text-gray-600 ml-1">Guk Technologies</span> <span className="mx-1">|</span> 
          Color: <span className="text-gray-600 ml-1">Silver</span>
        </h2>
      </div>

      {/* Price & Quantity Controls */}
      <div className="absolute top-[25%] right-[50px] transform -translate-y-1/2">
        <span className="text-lg font-bold text-black">$80.00</span>
      </div>

      {/* Quantity Controls */}
      <div className="absolute bottom-[100px] right-[40px] flex items-center space-x-3">
        <button
          className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition duration-300"
          onClick={() => handleQuantityChange("increase")}
        >
        <div className="absolute bottom-[3px]">+</div>
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button
          className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition duration-300"
          onClick={() => handleQuantityChange("decrease")}
        >
        <div className="absolute bottom-[3px]">-</div>
        </button>
      </div>

      {/* Remove Button (Trash Icon) */}
      <div className="absolute bottom-[65px] left-[172px] cursor-pointer">
        <img src={RemoveIcon} alt="Remove" className="w-[31px] h-[32px]" />
      </div>
    </div>
  );
};

export default Cart2;