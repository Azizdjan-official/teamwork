import React from 'react'
import Banka from './../../Icons/Banka';
import HeartBox from './../../Icons/HeartBox';
import TwoHeart from './../../Icons/TwoHeart';
import ChatIcon from './../../Icons/ChatIcon';

const EthicalBusiness = () => {
  return (
    <div className='bg-[#FCF3F6] py-10'>
        <div className='w-[50%] mx-auto flex items-center justify-between'>
            <div className='flex flex-col items-center justify-center  gap-2 p-4'>
                <Banka/>
                <h6 className='font-[600] text-sm text-black'>Ethical business</h6>
                <p className='font-[400] text-xs text-black'>Only green beauty products.</p>
            </div>
            <div className='flex flex-col items-center justify-center  gap-2 p-4'>
                <HeartBox/>
                <h6 className='font-[600] text-sm text-black'>Shipped free & with love</h6>
                <p className='font-[400] text-xs text-black'>On orders abouve $50.</p>
            </div>
            <div className='flex flex-col items-center justify-center  gap-2 p-4'>
                <TwoHeart/>
                <h6 className='font-[600] text-sm text-black'>Delivered in 1-3 days</h6>
                <p className='font-[400] text-xs text-black'>And packaged with love.</p>
            </div>
            <div className='flex flex-col items-center justify-center  gap-2 p-4'>
                <ChatIcon/>
                <h6 className='font-[600] text-sm text-black'>Personalized experience</h6>
                <p className='font-[400] text-xs text-black'>Free consultations via email.</p>
            </div>
        </div>
    </div>
  )
}

export default EthicalBusiness
