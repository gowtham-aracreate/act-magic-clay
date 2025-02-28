// import React, { useRef, useState } from "react";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";


// export default function OtpValidation() {
//     const [otp, setOtp] = useState(Array(6).fill("")); // Array with 6 empty strings
//     const inputRefs = useRef([]); // Array of refs for each input field
//     const navigate =useNavigate();

//     const handleKeyDown = (e) => {
//         if (
//             !/^[0-9]{1}$/.test(e.key) &&
//             e.key !== "Backspace" &&
//             e.key !== "Delete" &&
//             e.key !== "Tab" &&
//             !e.metaKey
//         ) {
//             e.preventDefault();
//         }

//         if (e.key === "Delete" || e.key === "Backspace") {
//             const index = inputRefs.current.indexOf(e.target);
//             if (index > 0) {
//                 setOtp((prevOtp) => [
//                     ...prevOtp.slice(0, index - 1),
//                     "",
//                     ...prevOtp.slice(index),
//                 ]);
//                 inputRefs.current[index - 1].focus();
//             }
//         }
//     };

//     const handleInput = (e) => {
//         const { target } = e;
//         const index = inputRefs.current.indexOf(target);
//         if (target.value) {
//             setOtp((prevOtp) => [
//                 ...prevOtp.slice(0, index),
//                 target.value,
//                 ...prevOtp.slice(index + 1),
//             ]);
//             if (index < otp.length - 1) {
//                 inputRefs.current[index + 1].focus();
//             }
//         }
//     };

//     const handleFocus = (e) => {
//         e.target.select();
//     };

//     const handlePaste = (e) => {
//         e.preventDefault();
//         const text = e.clipboardData.getData("text");
//         if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
//             return;
//         }
//         const digits = text.split("");
//         setOtp(digits);
//     };
//   //   const handleSubmit = async (e) => {
//   //         e.preventDefault();
//   //         const enteredOtp = otp.join('');
//   //   try {
//   //     const response = await axios.post('http://localhost:5000/verify-otp', { email, otp: enteredOtp });
//   //     if (response.status === 200) {
//   //       navigate('/dashboard'); // Redirect to dashboard if OTP is valid
//   //     }
//   //   } catch (error) {
//   //     alert('Invalid OTP');
//   //   }
//   // };        
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const enteredOtp = otp.join('');
    
//     try {
//       const response = await axios.post('http://localhost:5000/verify-otp', { email: 'us****me@gmail.com', otp: enteredOtp }); // Ensure email is passed here
//       if (response.status === 200 && response.data.success) {
//         navigate('/dashboard'); // Redirect to dashboard if OTP is valid
//       } else {
//         alert('Invalid OTP'); // Handle invalid OTP case
//       }
//     } catch (error) {
//       alert('Error verifying OTP'); // Handle general error case
//     }
//   };
  

//     return (
//         <section className="bg-white py-10 dark:bg-dark">
//             <div className="container">
//                 <div>
//                     <form id="otp-form" className="flex flex-row w-[54px] h-[54px] justify-around gap-[34px]">
//                         {otp.map((digit, index) => (
//                             <input
//                                 key={index}
//                                 type="text"
//                                 maxLength={1}
//                                 value={digit}
//                                 onChange={handleInput}
//                                 onKeyDown={handleKeyDown}
//                                 onFocus={handleFocus}
//                                 onPaste={handlePaste}
//                                 ref={(el) => (inputRefs.current[index] = el)}
//                                 className="shadow-xs flex w-[54px] items-center justify-center
//                                  rounded-lg border border-stroke bg-white p-2 text-center 
//                                  text-2xl font-medium text-gray-5 outline-none sm:text-4xl border-[#8A8A8A]"
//                             />
//                         ))}
                        
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// }


// // import React, { useRef, useState } from "react";
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import Auth from "../layout/Auth";

// // const OtpValidation = ({ email }) => {
// //   const [otp, setOtp] = useState(Array(6).fill("")); // Array with 6 empty strings
// //   const inputRefs = useRef([]); // Array of refs for each input field
// //   const navigate = useNavigate();

// //   const handleKeyDown = (e) => {
// //     if (!/^[0-9]{1}$/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab" && !e.metaKey) {
// //       e.preventDefault();
// //     }

// //     if (e.key === "Delete" || e.key === "Backspace") {
// //       const index = inputRefs.current.indexOf(e.target);
// //       if (index > 0) {
// //         setOtp((prevOtp) => [
// //           ...prevOtp.slice(0, index - 1),
// //           "",
// //           ...prevOtp.slice(index),
// //         ]);
// //         inputRefs.current[index - 1].focus();
// //       }
// //     }
// //   };

// //   const handleInput = (e) => {
// //     const { target } = e;
// //     const index = inputRefs.current.indexOf(target);
// //     if (target.value) {
// //       setOtp((prevOtp) => [
// //         ...prevOtp.slice(0, index),
// //         target.value,
// //         ...prevOtp.slice(index + 1),
// //       ]);
// //       if (index < otp.length - 1) {
// //         inputRefs.current[index + 1].focus();
// //       }
// //     }
// //   };

// //   const handleFocus = (e) => {
// //     e.target.select();
// //   };

// //   const handlePaste = (e) => {
// //     e.preventDefault();
// //     const text = e.clipboardData.getData("text");
// //     if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
// //       return;
// //     }
// //     const digits = text.split("");
// //     setOtp(digits);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const enteredOtp = otp.join('');

// //     try {
// //       const response = await axios.post('http://localhost:5000/verify-otp', { email, otp: enteredOtp });
// //       if (response.status === 200) {
// //         navigate('/dashboard'); // Redirect to dashboard if OTP is valid
// //       }
// //     } catch (error) {
// //       alert('Invalid OTP');
// //     }
// //   };

// //   return (
   
// //     <section className="bg-white py-10 dark:bg-dark">
// //       <div className="container">
// //         <h1 className="text-2xl text-black font-bold ">Email Verification</h1>
// //         <p className="w-[500px] text-[14px] mt-8 text-[#B8B8B8] flex gap-3.5 mb-4">
// //         A 6-digit code has been sent to your email        {email}<a href="/register" className="text-black font-bold">Change</a>
// //       </p>
// //         <div>
// //           <form id="otp-form" className="flex flex-row w-[54px] h-[54px] justify-around gap-[34px]" onSubmit={handleSubmit}>
// //             {otp.map((digit, index) => (
// //               <input
// //                 key={index}
// //                 type="text"
// //                 maxLength={1}
// //                 value={digit}
// //                 onChange={handleInput}
// //                 onKeyDown={handleKeyDown}
// //                 onFocus={handleFocus}
// //                 onPaste={handlePaste}
// //                 ref={(el) => (inputRefs.current[index] = el)}
// //                 className="shadow-xs flex w-[54px] items-center justify-center
// //                  rounded-lg border border-stroke bg-white p-2 text-center 
// //                  text-2xl font-medium text-gray-5 outline-none sm:text-4xl border-[#8A8A8A]"
// //               />
// //             ))}
// //             <button type="submit" className="w-[280px] h-[70px]  bg-yellow-300 text-2xl border-1 mt-6  fixed left-208 bottom-40 rounded-2xl cursor-pointer bg-black text-white">
// //               Verify Email
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </section>
    
// //   );
// // };

// // export default OtpValidation;


import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const OtpValidation = () => {
  const [otp, setOtp] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state;

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/verify-otp', { email, otp });
      if (response.status === 200 && response.data.success) {
        alert('OTP verified successfully!');
        navigate('/dashboard');
      } else {
        alert('Invalid OTP');
      }
    } catch (error) {
      console.error('OTP verification failed:', error);
      alert('OTP verification failed: ' + error.message);
    }
  };

  return (
    <div className='w-full fixed'>
      <h1 className='text-4xl mb-9'>OTP Verification</h1>

      <form onSubmit={handleSubmit}>
        <label className='text-base'>Enter OTP</label>
        <br />
        <input
          type="text"
          name="otp"
          placeholder='Enter your OTP'
          value={otp}
          className='w-full h-[54px] border-[1px] border-[#8A8A8A] rounded-xl pl-[24px] pt-[21px] pb-[21px]'
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit" className='w-[500px] h-[64px] text-2xl border-1 rounded-2xl bg-black text-white'>
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OtpValidation;

