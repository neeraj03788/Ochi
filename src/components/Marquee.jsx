import {motion} from 'framer-motion'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className="bg-[#004D43] rounded-tr-2xl rounded-tl-2xl w-full  py-10">
        <div className="text border-t-2 border-b-2 border-zinc-300 overflow-hidden pr-20 pb-5 gap-5 flex whitespace-nowrap">
            <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className="text-[15vw] leading-none font-bold uppercase -mb-[1vw] ">We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className="text-[15vw] leading-none font-bold uppercase -mb-[1vw] ">We are ochi</motion.h1>
            {/* <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className="text-[15vw] leading-none font-bold uppercase -mb-[1vw] ">We are ochi</motion.h1> */}
            {/* <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className="text-[15vw] leading-none font-bold uppercase -mb-[1vw] ">We are ochi</motion.h1> */}
        </div>
    </div>
  )
}

export default Marquee