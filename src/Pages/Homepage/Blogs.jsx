import ArrowLeft from './../../Icons/ArrowLeft';
import ArrowRight from './../../Icons/ArrowRight';
import blog1 from "../../Images/blog1.png"
import blog2 from "../../Images/blog2.png"
import blog3 from "../../Images/blog3.png"
import blog4 from "../../Images/blog4.png"


const Blogs = () => {
    return (
        <div className='py-6 flex flex-col items-center gap-4'>
            <h1 className='text-center font-[500] text-3xl  text-black'>Blogs</h1>
            <div className='flex w-[55%] py-6 mx-auto items-center  justify-between'>
                <ArrowLeft/>
                <div className='flex flex-col items-center gap-2 w-[20%]'>
                    <img src={blog1} />
                    <h6 className='font-[400] text-black text-xs'>Beauty  May 2, 2021</h6>
                    <p className='font-[500] text-center text-black text-xs'>Some beaty secrets from our editor in chief</p>
                </div>
                <div className='flex flex-col items-center gap-2 w-[20%]'>
                    <img src={blog2} />
                    <h6 className='font-[400] text-black text-xs'>Fragrance  May 2, 2021</h6>
                    <p className='font-[500] text-center text-black text-xs'>Morning beauty routine: our main rules</p>
                </div>
                <div className='flex flex-col items-center gap-2 w-[20%]'>
                    <img src={blog3} />
                    <h6 className='font-[400] text-black text-xs'> Beauty May 2, 2021</h6>
                    <p className='font-[500] text-center text-black text-xs'>Organic ingredients: do they even work?</p>
                </div>
                <div className='flex flex-col items-center gap-2 w-[20%]'>
                    <img src={blog4} />
                    <h6 className='font-[400] text-black text-xs'>Makeup  May 2, 2021</h6>
                    <p className='font-[500] text-center text-black text-xs'>The best cosmetic products</p>
                </div>
                <ArrowRight/>
            </div>
            <button className='border border-black px-4 py-2 font-[500]'>View All Posts</button>
        </div>
      )
}

export default Blogs
