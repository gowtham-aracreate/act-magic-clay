import React from 'react'
import Login from '../page/Login'
import emailimg from '../images/vector.png'
import passimg from '../images/fi-rr-lock.png'

const LoginFrom = () => {
  return (
    <div className=' w-full'>

      <h1 className='text-4xl mb-9'>
        Login

      </h1>
      <label className='text-base'>
        Email
      </label>
      <br />

      <div className='w-[500px] flex relative justify-end mb-2 pt-1.5'>
        <input type="text" placeholder='Enter your Email '
          className=' w-full h-[54px] absolute border-[1px] border-[#8A8A8A] rounded-xl pl-[24px] pt-[21px] pb-[21px]' />
        <img src={emailimg} className='w-[22px] h-[20px] mr-6 mt-4 mb-4' />
      </div>
      <br />

      <label className='text-base'>Password</label> <br />
      <div className='w-[500px] flex relative justify-end mb-2 pt-1.5'>
        <input type="text" placeholder='Enter your Password '
          className=' w-full h-[54px] absolute border-[1px] border-[#8A8A8A] rounded-xl pl-[24px] pt-[21px] pb-[21px]' />
        <img src={passimg} className='w-[22px] h-[22px] mr-6 mt-4 mb-4' />
      </div>
      <br /><br />



      <button className=' w-full h-[64px] text-2xl border-1 rounded-2xl bg-black text-white '>
        Login
      </button>

      <p className=' flex  text-[#8A8A8A] gap-3.5 mt-6 '>Don’t Have an Account?<strong className='text-black'>Register</strong></p>


    </div>
  )
}

export default LoginFrom
