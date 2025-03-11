import { useState } from "react";
import Image from "../assets/images/img.png";

const Order = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : Math.max(1, prev - 1)));
  };

  return (
    <div className="bg-white flex w-[1021px] h-[220px] rounded-lg shadow-md p-2 relative">
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

      {/* Price */}
      <div className="absolute top-[25%] right-[50px] transform -translate-y-1/2">
        <span className="text-lg font-bold text-black">$80.00</span>
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

      {/* Quantity Display */}
      <div className="absolute bottom-[3px] right-[40px]">
        <span className="text-lg text-gray-400">Qty</span>
        <h2 className="text-lg font-bold font-black">{quantity}</h2>
      </div>

      {/* Processing Button */}
      <div className="absolute bottom-[65px] cursor-pointer">
        <button className="w-[98.24px] h-[32px] bg-gray-400 ml-[170px] text-white rounded-lg mt-8">
          Processing
        </button>
      </div>

      {/* Confirm Delivery Button */}
      <div className="absolute bottom-[65px] left-[320px] cursor-pointer">
        <button className="w-[130.58px] h-[32px] bg-black text-white rounded-lg mt-8">
          Confirm Delivery
        </button>
      </div>
    </div>
  );
};

export default Order;
