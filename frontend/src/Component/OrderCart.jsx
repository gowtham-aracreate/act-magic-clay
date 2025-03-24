import { useState } from "react";
import { Heart } from "lucide-react";
import PropTypes from "prop-types";

const OrderCart = ({ name, seller, color, price, image, quantity = 1 }) => {
  const [status, setStatus] = useState("Processing");

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price * quantity);

  return (
    <div className="bg-white flex w-[1120px] h-[213px] rounded-lg shadow-md 
     relative">
      {/* Product Image with Heart Icon */}
      <div className="relative w-[141px] h-[212px]">
        <img src={image} alt="Product" className="rounded-lg w-full h-full object-cover" />
        <button 
          className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
          aria-label="Add to Wishlist"
        >
          <Heart size={18} className="text-gray-700" />
        </button>
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-center ml-6 flex-grow">
        <h1 className="text-2xl font-bold text-black">{name}</h1>
        <h2 className="text-gray-600 font-medium">
          <span className="text-black">Seller:</span> {seller} <span className="mx-1">|</span> 
          <span className="text-black"> Color:</span> {color}
        </h2>
      </div>

      {/* Price and Quantity */}
      <div className="flex flex-col justify-center items-end mr-8">
        <span className="text-xl font-bold text-black">{formattedPrice}</span>
        <span className="text-gray-500 text-sm mt-1">QTY <span className="text-black">{quantity}</span></span>

        {/* Status Buttons */}
        <div className="flex mt-4 space-x-3">
          <button 
            className="px-4 py-1 bg-gray-300 text-black rounded-lg"
            onClick={() => setStatus("Processing")}
            aria-label="Reset Status"
          >
            Reset Status
          </button>
          <button 
            className="px-4 py-1 bg-black text-white rounded-lg"
            onClick={() => setStatus("Delivered")}
            aria-label="Confirm Delivery"
          >
            Confirm Delivery
          </button>
        </div>
        <span className="text-sm text-gray-500 mt-2">{status}</span>
      </div>
    </div>
  );
};

OrderCart.propTypes = {
  name: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};

OrderCart.defaultProps = {
  quantity: 1,
};

export default OrderCart;