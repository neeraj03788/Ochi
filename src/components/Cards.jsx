import { motion } from "framer-motion"
import { useState } from "react"




function Cards() {
  const [ishover, setHover] = useState(false);
  const [ishover1, setHover1] = useState(false);

  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".001"  className="w-full mt-5 md:py-10 ">
        <div className="w-full md:px-20 px-10 pb-10 border-b-[1px] border-zinc-800">
            <h1 className="text-6xl  tracking-tight">Featured projects</h1>
            </div>
            <div className="md:px-20">
            <div className="cards w-full flex md:flex-nowrap flex-wrap md:gap-10  md:mt-10">
                
                <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}  className=" card-section mb-2 relative md:w-1/2 w-[70vw] mx-auto  md:h-[80vh]">
                <h1 className="absolute flex left-full md:overflow-hidden hidden -translate-x-1/2 top-1/2  -translate-y-1/2  leading-none tracking-tighter z-[9] text-8xl ">{"FYDE".split('').map((item,index)=>{
                   return <motion.span initial={{y:"100%"}} animate={ishover?({y:"0"}):({y:"100%"})}
                   transition={{ease:[0.22, 1, 0.36, 1],delay:index*.06}} className="inline-block " key={item}>{item}</motion.span>
                 })}</h1>
                    <div className="w-full h-full rounded-xl overflow-hidden">
                        <img className="w-full h-full bg-cover hover:rounded-xl  hover:scale-95" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />

                    </div>
                
                </div>
                 <div onMouseEnter={()=>{setHover1(true)}} onMouseLeave={()=>{setHover1(false)}} className="relative card-section mb-2  md:w-1/2 w-[70vw] mx-auto  md:h-[80vh]">
                 <h1 className="absolute right-full top-1/2 flex md:overflow-hidden hidden  rounded-xl translate-x-1/2 -translate-y-1/2  leading-none tracking-tighter z-[9] text-8xl ">
                 {"VISE".split('').map((item,index)=>{
                   return <motion.span initial={{y:"100%"}} animate={ishover1?({y:"0"}):({y:"100%"})}
                   transition={{ease:[0.22, 1, 0.36, 1],delay:index*.06}} className="inline-block " key={item}>{item}</motion.span>
                 })}</h1>
                    <div className="w-full h-full  rounded-xl overflow-hidden">
                    <img className="w-full h-full bg-cover  hover:rounded-xl hover:scale-95" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                
                
            
        </div>
        
            
                
                
            
       
        </div>
    </div>
  )
}

export default Cards