import React from 'react'
import card1 from '../images/paymentcard1.svg'
import card2 from '../images/paymentcard2.svg'
import card3 from '../images/paymentcard3.svg'
import card4 from '../images/paymentcard4.svg'

const PaymentCard = () => {
    return (
        <div className='flex flex-row w-[1390px] h-[231px] bg-red-300'>

            <img src={card2} />
            <img src={card2} />
            <img src={card3} />
            <img src={card4} />

        </div>
    )
}

export default PaymentCard
