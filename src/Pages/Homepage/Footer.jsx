import LogoWhiteIcon from './../../Icons/LogoWhiteIcon';
import TwitterIcon from './../../Icons/TwitterIcon';
import FacebookIcon from './../../Icons/FacebookIcon';
import YoutubeIcon from './../../Icons/YoutubeIcon';
import TelegramIcon from './../../Icons/TelegramIcon';
import InstagramBlackIcon from './../../Icons/InstagramBlackIcon';

const Footer = () => {
  return (
    <div className='bg-[#000000]'>
        <footer className='w-[80%] mx-auto flex justify-between py-10'>
            <div className='flex flex-col justify-around items-center'>
                <LogoWhiteIcon/>
                <div className='flex gap-3'>
                    <TwitterIcon/>
                    <FacebookIcon/>
                    <YoutubeIcon/>
                    <TelegramIcon/>
                    <InstagramBlackIcon/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h4 className='font-[600] text-white text-lg capitalize'>About</h4>
                <p className='font-[400] text-white text-base'>Finde</p>
                <p className='font-[400] text-white text-base'>Brand</p>
                <p className='font-[400] text-white text-base'>About Us</p>
                <p className='font-[400] text-white text-base'>Contact</p>
                <p className='font-[400] text-white text-base'>Where to Buy</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h4 className='font-[600] text-white text-lg capitalize'>Help</h4>
                <p className='font-[400] text-white text-base'>Shipping & Returns</p>
                <p className='font-[400] text-white text-base'>Track Order</p>
                <p className='font-[400] text-white text-base'>FAQ</p>
                <p className='font-[400] text-white text-base'>Terms & Conditions</p>
                <p className='font-[400] text-white text-base'>Privacy Policy</p>
            </div>
            <div className='flex flex-col justify-around  '>
                <h5 className='font-[600] text-white text-lg capitalize'>Subscribe</h5>
                <h6 className='font-[400] text-white text-base'>Subscribe now and thank us later</h6>
                <div className='flex'>
                    <input className='border border-white bg-black text-white px-2 py-2' type="text"/>
                    <button className='text-white border border-white px-2 py-2'>Subscribe</button>
                </div>
            </div>
        </footer>
        <div className='border border-[#4b4b4b]'>
            <h4 className='font-[400] text-sm text-center text-white py-4'>© 2021 Beauty Store. All rights reserved.</h4>
        </div>
    </div>
  )
}

export default Footer
