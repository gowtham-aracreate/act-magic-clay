import React from "react";
import OrderCart from "../Component/OrderCart";
// import Dashboard from "../layout/DashboardLayout";
import DashboardLayout from "../layout/DashboardLayout";
import image from "../assets/images/img.png";
import DashboardCard from '../Component/DashboardCard';
import img1 from '../assets/images/img1.svg';
import img2 from '../assets/images/img2.svg';
import img3 from '../assets/images/img3.svg';
import img4 from '../assets/images/img4.svg';
import img5 from '../assets/images/img2.png';
const OrderPage = () => {
  return (
    <DashboardLayout>
    <div className="pt-[170px] pl-[350px] flex flex-col gap-4">
      <OrderCart
        name="Sample Product"
        seller="Sample Seller"
        color="Red"
        price={100}
        image={image}
        quantity={2}
      />
      <OrderCart
        name="Sample Product"
        seller="Sample Seller"
        color="Red"
        price={100}
        image={image}
        quantity={2}
      />
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

export default OrderPage;
