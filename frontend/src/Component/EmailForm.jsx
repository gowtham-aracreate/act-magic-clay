import React, { useState } from 'react';
import axios from 'axios';
import OtpValidation from './OtpValidation';

const EmailForm = () => {
  const [email, setEmail] = useState('us****me@gmail.com'); // Masked email for display
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = async () => {
    try {
      await axios.post('http://localhost:5000/send-otp', { email: email.replace(/\*\*\*\*\*/g, 'myemail') });
      setOtpSent(true);
      console.log("otp success")
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  return (
    <div className="w-full fixed">
      <h1 className="w-full text-5xl ">Email Verification</h1>
      <p className="w-[500px] text-[14px] mt-11 text-[#B8B8B8] flex gap-3.5 ">
        A 6-digit code has been sent to your email {email} <strong className="text-black">Change</strong>
      </p>
      <OtpValidation />
        
    
      <p className="text-[16px] ">0:45 remaining</p>
      <button type="submit" className="w-[500px] h-[70px] text-2xl border-1 mt-6  fixed left-180 bottom-48 rounded-2xl cursor-pointer bg-black text-white">
        Verify Email  </button>

      <p className="mt-28 text-[#B8B8B8] flex gap-3.5">
        Didn’t receive the code? <strong className="text-black">Resend</strong>
      </p>
    </div>
  );
};

export default EmailForm;
