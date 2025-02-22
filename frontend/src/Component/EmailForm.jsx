import React from 'react'
import OtpValidation from './OtpValidation'

const EmailForm = () => {
    return (
        <div className='w-full'>
            <h1 className=" w-full text-5xl ">Email Verification</h1>
            <p className=" w-[500px] text-[14px] mt-11 text-[#B8B8B8] flex gap-3.5">
                A 6-digit code has been sent to your email us****me@gmail.com  <strong className='text-black'>Change</strong>
            </p>
            <OtpValidation />
            <p className='text-[16px]'>0:45 remaining</p>
            <button className=' w-[500px] h-[54px] text-2xl border-1 mt-6 rounded-2xl cursor-pointer bg-black text-white  '>
                Verify Email
            </button>
            <p className=' mt-6 text-[#B8B8B8] flex gap-3.5 '>Didn’t receive the code? <strong className=' text-black'>Resend</strong></p>
        </div>
    )
}

export default EmailForm
