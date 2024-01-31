import React from 'react'

const Section = () => {
  return (
    <div className='bgImage flex items-center justify-center'>
        <div className='text-center flex flex-col gap-6 items-center justify-center'>
            <h1 className='font-[500] text-black text-3xl'>Discover summer promotions</h1>
            <h6 className='font-[400] text-black text-sm'>Free sample and free shipping when you spend $50</h6>
            <div className='flex gap-4'>
                <button className='bg-black text-white px-4 py-2'>Skincare</button>
                <button className='border border-black px-4 py-2'>Shop All</button>
            </div>
        </div>
    </div>
  )
}

export default Section
