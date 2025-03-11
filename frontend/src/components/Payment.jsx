// import React from 'react'
import payment1 from '../assets/images/Group 53.png'
import payement2 from '../assets/images/Group 52.png'
import payement3 from '../assets/images/Group 51.png'
import payement4 from '../assets/images/Group 50.png'
import TransactionPage from '../components/TransactionPage'

const Payment = () => {
  return (
    <div>
    <div className='flex  gap-5 w-[1390px] h-[231px] bg-white rounded-lg'>
      <img src={payment1} className='w-[332px] h-[194px]' />
        <img src={payement2} className=' rounded-xl w-[332px] h-[194px]' />
        <img src={payement3} className=' rounded-xl w-[332px] h-[194px]'/>
        <img src={payement4} className=' rounded-xl w-[332px] h-[194px] '/> 
    </div>
    < TransactionPage />
    </div>
  )
}

export default Payment
