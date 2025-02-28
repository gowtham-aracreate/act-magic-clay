import React from 'react'
import userimg from '../images/fi-rr-user.png'
import emailimg from '../images/vector.png'
import passimg from '../images/fi-rr-lock.png'
import Toggle from '../Component/ToggleButton'


const RegisterForm = () => {


  return (
    <div className=' w-full flex flex-col'>

      <div className=' w-full'>
        <h1 className='text-[40px]'>
          Register

        </h1>

        <form>
          <label className='text-base'>
            Name
          </label>
          <br />

          <div className='w-[500px] flex relative justify-end '>
            <input type="text" placeholder='Enter name here '
              className=' w-full h-[54px] absolute border-[1px] border-[#8A8A8A] rounded-xl pl-[24px] pt-[21px] pb-[21px]' />
            <img src={userimg} className='w-[22px] h-[22px] mr-6 mt-4 mb-4' />
          </div>
          <br />


          <label className='text-base'>
            Email
          </label>
          <br />

          <div className='w-[500px] flex relative justify-end '>
            <input type="text" placeholder='Enter your Email '
              className=' w-full h-[54px] absolute border-[1px] border-[#8A8A8A] rounded-xl pl-[24px] pt-[21px] pb-[21px]' />
            <img src={emailimg} className='w-[22px] h-[20px] mr-6 mt-4 mb-4' />
          </div>
          <br />

          <label className='text-base'>Password</label> <br />
          <div className='w-[500px] flex relative justify-end '>
            <input type="text" placeholder='Enter your Password '
              className=' w-full h-[54px] absolute border-[1px] border-[#8A8A8A] rounded-xl pl-[24px] pt-[21px] pb-[21px]' />
            <img src={passimg} className='w-[22px] h-[22px] mr-6 mt-4 mb-4' />
          </div>
          <br /><br />

          <Toggle />




        </form>


        <div className='w-[500px] flex flex-row pt-6'>
          <input type="checkbox" className='w-6 h-6 ' />
          <p className='w-[500px] h-[22px] text-[16px] pl-[16px] text-[#B8B8B8] flex-row' >I agree to all the <strong className=' text-black'>Terms, Privacy Policy</strong>and<strong className=' text-black'>Fees.</strong></p>
        </div>

        <button className=' w-full h-[54px] text-2xl border-1 rounded-2xl cursor-pointer bg-black text-white mt-11 '>
          Register
        </button>



        <p className=' text-[#B8B8B8] mt-6'>Already have an Account?
          <a href="/login" className='w-full h-full text-black cursor-pointer'>Log in.</a></p>

      </div>

    </div>
  )
}

export default RegisterForm
