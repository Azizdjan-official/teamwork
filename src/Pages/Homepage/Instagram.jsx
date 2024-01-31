import InstagramIcon from './../../Icons/InstagramIcon';
import rasm1 from "../../Images/rasm1.png"
import rasm2 from "../../Images/rasm2.png"
import rasm3 from "../../Images/rasm3.png"
import rasm4 from "../../Images/rasm4.png"
import rasm5 from "../../Images/rasm5.png"
import rasm6 from "../../Images/rasm6.png"
import rasm7 from "../../Images/rasm7.png"

const Instagram = () => {
  return (
    <div className='flex flex-col items-center justify-center py-8'>
        <div className='flex items-center'><InstagramIcon/> <h4 className='font-[500] text-3xl'>Instagram</h4></div>
        <div className='flex justify-between w-[98%] gap-2 my-8'>
            <div className='w-[40%] border'>
                <img src={rasm1} className='w-full h-full' />
            </div>
            <div className='w-[20%] gap-2 flex flex-col border'>
                <img src={rasm2}  />
                <img src={rasm3}  />
            </div>
            <div className='w-[20%] gap-2 flex flex-col border'>
                <img src={rasm4}  />
                <img src={rasm5}  />
            </div>
            <div className='w-[20%] gap-2 flex flex-col border'>
                <img src={rasm6}  />
                <img src={rasm7}  />
            </div>
        </div>
        <button className='border border-black px-4 py-2'>Follow Us @beautyshop</button>
    </div>
  )
}

export default Instagram
