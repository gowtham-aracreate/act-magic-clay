import React, { useState } from 'react';
import DashboardLayout from '../layout/DashboardLayout';
import Cart from '../Component/Cart'; // Import the Cart component
import removeIcon from '../assets/images/remove.png'; // Import the remove icon
import image from '../assets/images/img.png'; // Import the image
import Summary from '../Component/Summary';
import DashboardCard from '../Component/DashboardCard';
import img1 from '../assets/images/img1.svg';
import img2 from '../assets/images/img2.svg';
import img3 from '../assets/images/img3.svg';
import img4 from '../assets/images/img4.svg';
import img5 from '../assets/images/img2.png';

const CartPage = () => {
  const [totalAmount, setTotalAmount] = useState(0); // Initialize with zero
  const [productCount, setProductCount] = useState(0); // Initialize with zero

  const handleQuantityChange = (quantityDifference, price) => {
    setTotalAmount((prevTotal) => prevTotal + price * quantityDifference);
    setProductCount((prevCount) => prevCount + quantityDifference);
  };

  const handleRemove = () => {
    console.log("Item removed from cart");
  };

  return (
    <DashboardLayout>
      <div className='pt-[170px] pl-[350px] flex flex-col gap-4'>
        <Cart
          name="Product Name"
          seller="Seller Name"
          color="Color"
          price={80}
          image={image}
          removeIcon={removeIcon}
          handleRemove={handleRemove}
          onQuantityChange={handleQuantityChange}
        />
        <Cart
          name="Product Name"
          seller="Seller Name"
          color="Color"
          price={80}
          image={image}
          removeIcon={removeIcon}
          handleRemove={handleRemove}
          onQuantityChange={handleQuantityChange}
        />
      </div>
      <div className='flex flex-col gap-4 pl-[350px] pt-4'>
        <Summary totalAmount={totalAmount} productCount={productCount} />
      </div>
      <div className='pl-[420px] pt-4 flex flex-row gap-4'>
        <h1 className='font-semibold text-[32px]'>Saved Items</h1>
        <h1 className='font-light text-[20px] pt-3.5 pl-[1050px]'>See all</h1>
      </div>
      <div className='flex flex-row gap-4 pl-[350px]'>
        <DashboardCard src={img1} />
        <DashboardCard src={img2} />
        <DashboardCard src={img3} />
        <DashboardCard src={img4} />
        <DashboardCard src={img5} />
      </div>
    </DashboardLayout>
  );
};

export default CartPage;

// import React, { useState } from 'react';
// import DashboardLayout from '../layout/DashboardLayout';
// import Cart from '../Component/Cart';
// import removeIcon from '../assets/images/remove.png';
// import image from '../assets/images/img.png';
// import Summary from '../Component/Summary';
// import DashboardCard from '../Component/DashboardCard';
// import img1 from '../assets/images/img1.svg';
// import img2 from '../assets/images/img2.svg';
// import img3 from '../assets/images/img3.svg';
// import img4 from '../assets/images/img4.svg';
// import img5 from '../assets/images/card0.svg';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]); // 🛒 Initially Empty
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [productCount, setProductCount] = useState(0);

//   const handleQuantityChange = (id, quantityDifference, price) => {
//     setCartItems((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + quantityDifference } : item
//       )
//     );
//     setTotalAmount((prev) => prev + price * quantityDifference);
//     setProductCount((prev) => prev + quantityDifference);
//   };

//   const handleAddToCart = () => {
//     const newItem = {
//       id: cartItems.length + 1,
//       name: "Product Name",
//       seller: "Seller Name",
//       color: "Color",
//       price: 80,
//       image: image,
//       quantity: 1,
//     };
//     setCartItems([...cartItems, newItem]);
//     setTotalAmount((prev) => prev + newItem.price);
//     setProductCount((prev) => prev + 1);
//   };

//   const handleRemove = (id, price, quantity) => {
//     setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
//     setTotalAmount((prev) => prev - price * quantity);
//     setProductCount((prev) => prev - quantity);
//   };

//   return (
//     <DashboardLayout>
//       <div className="pt-[170px] pl-[350px] flex flex-col gap-4">
//         {cartItems.length === 0 ? (
//           <h1 className="text-2xl font-bold">Your cart is empty</h1>
//         ) : (
//           cartItems.map((item) => (
//             <Cart
//               key={item.id}
//               id={item.id}
//               name={item.name}
//               seller={item.seller}
//               color={item.color}
//               price={item.price}
//               image={item.image}
//               removeIcon={removeIcon}
//               quantity={item.quantity}
//               handleRemove={() => handleRemove(item.id, item.price, item.quantity)}
//               onQuantityChange={(diff) => handleQuantityChange(item.id, diff, item.price)}
//             />
//           ))
//         )}
//       </div>
//       <button
//         className="mt-4 ml-[350px] px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         onClick={handleAddToCart}
//       >
//         Add New Product
//       </button>
//       <div className="flex flex-col gap-4 pl-[350px] pt-4">
//         <Summary totalAmount={totalAmount} productCount={productCount} />
//       </div>
//       <div className="pl-[420px] pt-4 flex flex-row gap-4">
//         <h1 className="font-semibold text-[32px]">Saved Items</h1>
//         <h1 className="font-light text-[20px] pt-3.5 pl-[1050px]">See all</h1>
//       </div>
//       <div className="flex flex-row gap-4 pl-[350px]">
//         <DashboardCard src={img1} />
//         <DashboardCard src={img2} />
//         <DashboardCard src={img3} />
//         <DashboardCard src={img4} />
//         <DashboardCard src={img5} />
//       </div>
//     </DashboardLayout>
//   );
// };

// export default CartPage;
