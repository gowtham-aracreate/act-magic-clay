// import React from 'react'
import card1 from '..assets/images/paymentcard1.svg'
import card2 from '..assets/images/paymentcard2.svg'
import card3 from '..assets/images/paymentcard3.svg'
import card4 from '..assets/images/paymentcard4.svg'

const PaymentCard = () => {
    return (
        <div className='flex flex-row w-[1390px] h-[231px] bg-red-300'>

            <img src={card1} />
            <img src={card2} />
            <img src={card3} />
            <img src={card4} />

        </div>
    )
}

export default PaymentCard
