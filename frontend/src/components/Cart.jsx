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
