import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

//47-53
function Landing() {
  return (
    <>
    
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className="w-full h-screen bg-zinc-900 pt-2  -z-1 ">
        <div className="structure mt-52 px-3">
           
           {["We Create", "Eye Opening","presentations"].map((item,index)=>{
            return (
                <div key={item} className="masker ">
                <div className="w-fit flex items-center ">
                    {index===1 && (<motion.div className="mr-[1vw] w-[9vw] h-[6vw] relative top-[1vw] bg-red-500" initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1]}}></motion.div>)}
            <h1 className="text-[9vw] flex items-center h-full md:text-[7.5vw] font-semibold leading-none md:leading-[7vw] tracking-tighter">{item}</h1>
            </div>
            </div> 
            )
           }
           )}
        </div>
        <div className="border-t-[1px] mt-20 border-zinc-800   md:flex justify-between items-center py-5 px-15" >
        {["For Public and private companies","from the first Pitch to IPO"].map((item)=>(
            <p  className="tracking-tight p-5 ml-5 text-md font-light leading-none" key={item}>{item}</p>
        ))}
        <div className="start flex gap-5 px-2 p-5 ml-5 ">
            <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light  md:uppercase">start the project</div>
            <div className="w-10  h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full ">
                <span className="rotate-[45deg]"><FaArrowUp /></span></div>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Landing