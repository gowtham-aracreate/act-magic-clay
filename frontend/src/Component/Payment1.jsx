// import React from 'react'
import payment1 from '../assets/images/Group 53.svg'
import payment2 from '../assets/images/Group 52.svg'
import payment3 from '../assets/images/Group 51.svg'
import payment4 from '../assets/images/Group 50.svg'
import TransactionPage from '../components/TransactionPage'

const Payment = () => {
  return (
    <div>
    <div className='flex  gap-5 w-[1390px] h-[231px] bg-white rounded-lg'>
      <img src={payment1} className='w-[332px] h-[194px]' />
        <img src={payment2} className=' rounded-xl w-[332px] h-[194px]' />
        <img src={payment3} className=' rounded-xl w-[332px] h-[194px]'/>
        <img src={payment4} className=' rounded-xl w-[332px] h-[194px] '/> 
    </div>
    < TransactionPage />
    </div>
  )
}

export default Payment
