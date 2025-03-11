import React from 'react'
import card0 from '../assets/images/card0.svg'
import card1 from '../assets/images/card1.svg'
import card2 from '../assets/images/card2.svg'
import card3 from '../assets/images/card3.svg'
import card4 from '../assets/images/card4.svg'
import card5 from '../assets/images/0.svg'
import home1 from '../assets/images/home1.svg'


const Home = () => {
    return (



        <div className='w-full '>

            <div className=' flex  bg-[#EFEFEF] h-[1069px] justify-between pl-[79px] pt-[39px] pr-[122px] '>
                <h1 className=' text-7xl'>Magic Clay</h1>
                <div className=' flex flex-row gap-24  text-2xl'>
                    <a href="#">Profile</a>
                    <a href="#">orders</a>
                    <a href="#">offers</a>
                    <a href="#">Security</a>
                    <a href="#">About us</a>
                </div>
                <div className=' absolute '>
                    <img src={home1} className=' w-screen h-[848px] ' />
                </div>
            </div>


            <h1 className='text-6xl pl-12 pt-14'>Popular Daily</h1>

            <div className='flex mt-7 px-[50px] gap-[150px]'>
                <div className='relative w-[228px] h-[320px]'>
                    <img src={card0} className='w-[228px] h-[320px] object-cover rounded-xl' />
                    <div className='w-full h-[130px] bg-[#D9D9D9] rounded-xl opacity-70 absolute bottom-0 flex justify-center items-center'>
                        <p className=' flex justify-center items-center flex-col'>Calco:</p>
                        <p className=' flex justify-center items-center gap-1 flex-col'>$ 80.00</p>
                    </div>
                </div>

                <div className='relative w-[228px] h-[320px]'>
                    <img src={card1} className='w-[228px] h-[320px] object-cover rounded-xl' />
                    <div className='w-full h-[130px] bg-[#D9D9D9] rounded-xl opacity-70 absolute bottom-0 flex justify-center items-center'>
                        <p>Calco</p>
                        <p>Calco</p>
                    </div>
                </div>

                <div className='relative w-[228px] h-[320px]'>
                    <img src={card2} className='w-[228px] h-[320px] object-cover rounded-xl' />
                    <div className='w-full h-[130px] bg-[#D9D9D9] rounded-xl opacity-70 absolute bottom-0 flex justify-center items-center'>
                        <p>Calco</p>
                        <p>Calco</p>
                    </div>
                </div>

                <div className='relative w-[228px] h-[320px]'>
                    <img src={card3} className='w-[228px] h-[320px] object-cover rounded-xl' />
                    <div className='w-full h-[130px] bg-[#D9D9D9] rounded-xl opacity-70 absolute bottom-0 flex justify-center items-center'>
                        <p>Calco</p>
                        <p>Calco</p>
                    </div>
                </div>

                <div className='relative w-[228px] h-[320px]'>
                    <img src={card4} className='w-[228px] h-[320px] object-cover rounded-xl' />
                    <div className='w-full h-[130px] bg-[#D9D9D9] rounded-xl opacity-70 absolute bottom-0 flex justify-center items-center'>
                        <p>Calco</p>
                        <p>Calco</p>
                    </div>
                </div>



            </div>

            <div className=' bg-[#EFEFEF] flex mt-20 pl-12 py-20'>
                <div className=' flex'>
                    <img src={card5} className=' w-[1136px] h-[590px] flex relative' />
                    <button className=' w-[254px] h-16 bg-black text-white rounded-xl absolute ml-[800px] mt-[480px]'>Shop Now</button>
                </div>
                <div className=' flex flex-col ml-[103px]'>
                    <h1 className=' w-[350px] h-[40px] text-4xl'>Thinking About what to get?</h1>
                    <p className=' w-[419px] h-[432px] text-[#9D9D9D] pt-12 leading- text-2xl font-normal pr-24'>A ceramic is any of the various hard,
                        brittle, heat-resistant and corrosion-resistant materials made by shaping and then firing an inorganic,
                        nonmetallic material, such as clay, at a high temperature.
                    </p>
                </div>

            </div>

            <hr />


            <div className=' bg-[#EFEFEF] flex pr-[230px]'>
                <div className=' w-[1521px] h-[525px] pt-20'>
                    <h1 className=' text-5xl pl-[161px] '>Magic Clay</h1>
                    <h2 className=' text-xl pl-[161px] pt-[141px]  text-[#6C6C6C]'>HELP</h2>
                    <p className=' text-xl pl-[161px] text-[#6C6C6C] pt-2'>Help Center</p>
                    <p className=' text-xl pl-[161px] text-[#6C6C6C] pt-2'>Contact Us</p>
                    <p className='text-xl pl-[161px] text-[#6C6C6C] pt-2'>How to Shop</p>
                    <p className='text-xl pl-[161px] text-[#6C6C6C] pt-2'>Delivery Timelines</p>

                </div>
                <div className=' w-[1521px] h-[525px] pt-16'>
                    <h1 className=' text-xl pl-[152px] '>New to ByteMarket? Join Us Now</h1>
                    <input type="search" placeholder='Enter name here '
                        className=' w-[460px] h-[55px] rounded-xl border-[2px] pl-6 mt-6 ml-[152px]' />
                    <p className=' text-xl pl-[161px] pt-[91px] text-[#6C6C6C]'>ABOUT</p>
                    <p className='text-xl pl-[161px] text-[#6C6C6C] pt-2'>About ByteMarket</p>
                    <p className='text-xl pl-[161px] text-[#6C6C6C] pt-2'>Terms & Conditions</p>
                    <p className='text-xl pl-[161px] text-[#6C6C6C] pt-2'>Privacy Policy</p>
                </div>
                <div className=' w-[1521px] h-[525px] pt-24'>
                    <button className=' bg-black text-white w-[353px] h-[55px] mt-6 rounded-xl ml-36'>Register Now</button>
                    <p className=' text-xl pl-[161px] pt-[81px] text-[#6C6C6C]'>EARN</p>
                    <p className='text-xl pl-[161px] pt-2 text-[#6C6C6C]'>Become a Seller</p>
                </div>
            </div>

        </div>


    )
}

export default Home


