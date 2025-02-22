import React from "react";
const Summary = () => {
  return (
    <div className="flex justify-end -mt-[400px] mr-[250px]">
      <div className="bg-white w-[385px] h-[285px] rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-black">Summary</h1>
        
        <div className="flex justify-between text-xl text-black mt-6">
          <span>Product Count:</span>
          <span>02</span>
        </div>

        <div className="flex justify-between text-xl text-black mt-6">
          <span>Total:</span>
          <span>$160.00</span>
        </div>

        <button className="w-full h-[48px] bg-black text-white rounded-lg mt-8">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Summary;
