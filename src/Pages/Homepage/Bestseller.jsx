import React from 'react'
import ArrowLeft from './../../Icons/ArrowLeft';
import ArrowRight from './../../Icons/ArrowRight';
import card1 from "../../Images/card1.png"
import card2 from "../../Images/card2.png"
import card3 from "../../Images/card3.png"

const Bestseller = () => {
  return (
    <div className='py-6 flex flex-col items-center gap-4'>
        <h1 className='text-center font-[500] text-3xl  text-black'>Our bestsellers</h1>
        <div className='flex w-[55%] py-6 mx-auto items-center  justify-between'>
            <ArrowLeft/>
            <div className='flex flex-col items-center gap-2 w-[20%]'>
                <img src={card1} />
                <h6 className='font-[600] text-black text-xs'>Facial Balancing Gel</h6>
                <p className='font-[400] text-black text-xs'>$ 45.00 - $ 99.00</p>
            </div>
            <div className='flex flex-col items-center gap-2 w-[20%]'>
                <img src={card2} />
                <h6 className='font-[600] text-black text-xs'>Post-Shave Lotion</h6>
                <p className='font-[400] text-black text-xs'>$ 45.00 - $ 99.00</p>
            </div>
            <div className='flex flex-col items-center gap-2 w-[20%]'>
                <img src={card3} />
                <h6 className='font-[600] text-black text-xs'>Facial Balancing Gel</h6>
                <p className='font-[400] text-black text-xs'>$ 45.00 - $ 99.00</p>
            </div>
            <div className='flex flex-col items-center gap-2 w-[20%]'>
                <img src={card1} />
                <h6 className='font-[600] text-black text-xs'>Post-Shave Lotion</h6>
                <p className='font-[400] text-black text-xs'>$ 45.00 - $ 99.00</p>
            </div>
            <ArrowRight/>
        </div>
        <button className='border border-black px-4 py-2'>Shop All</button>
    </div>
  )
}

export default Bestseller
