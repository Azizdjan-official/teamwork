import React from 'react'
import ArrowRight from './../../Icons/ArrowRight';
import ChatIcon from './../../Icons/ChatIcon';
import PhoneIcon from './../../Icons/PhoneIcon';
import MessageIcon from './../../Icons/MessageIcon';

const Help = () => {
    return (
        <div className='bg-[#FCF3F6] py-10'>
                <h2 className='text-center font-[500] text-black text-3xl py-2'>How can we help?</h2>
            <div className='w-[50%] mx-auto flex items-center justify-between'>
                <div className='flex flex-col items-center justify-between  gap-3 p-4 '>
                    <ChatIcon/>
                    <h6 className='font-[600] text-sm text-black'>Frequently asked questions</h6>
                    <p className='font-[400] text-xs text-black'>If you have questions about products, orders or <br /> account info, you may find answer in our FAQ.</p>
                    <button className='flex'>View FAQ  </button>
                </div>
                <div className='flex flex-col items-center justify-between  gap-3 p-4'>
                    <PhoneIcon/>
                    <h6 className='font-[600] text-sm text-black'>Give us a call</h6>
                    <p className='font-[400] text-xs text-black'>You can always give us a call: Mon <br /> to Fri from 9 am till 7 pm EST.</p>
                    <p className='font-[600] text-sm text-black'>+44 678 94830</p>
                </div>
                <div className='flex flex-col items-center justify-between  gap-3 p-4'>
                    <MessageIcon/>
                    <h6 className='font-[600] text-sm text-black'>Drop us a line</h6>
                    <p className='font-[400] text-xs text-black'>Drop us a line and we will get back to <br /> you as soon as possible.</p>
                    <p className='font-[600] text-sm text-black'>hello@example.com</p>
                </div>
                
            </div>
        </div>
      )
}

export default Help
