import { motion } from "framer-motion"

import Marquee from "../components/Marquee"

import { FaArrowUp } from "react-icons/fa6";

import { useEffect, useState } from "react";


function About_us() {
    const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle-180);
    });
  });
  return (
    <>
    
        
    
    <div>
        <div data-scroll data-scroll-section data-scroll-speed="-.8" className="w-full h-[70vh] bg-zinc-900 pt-2 md:pb-10 -z-1 ">
        <div className="structure mt-32 px-3">
           
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
        </div>
    </div>
    <div className="border-[1px]  border-zinc-800 "></div>
    <div className="about w-full md:flex   block justify-between md:h-[50vh] mt-5 gap-5 p-5">
        <div className="w-1/3 ">
            <h1 className="text-xl font-light">About Us:</h1>
        </div>
        <div className="md:w-1/3 md:flex block w-full h-full p-5 leading-5  md:flex-col gap-2 ">
            <div className="w-full  ">
                <h1 className="text-2xl tracking-tighter pb-5 leading-none font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam est fugiat nisi molestias fuga aut? Minus qui ad voluptate?</h1>
            </div>
            <div className="w-full ">
                <h1 className="text-2xl tracking-tighter pb-5 leading-none font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa repellendus fuga quia ad quis ab soluta, molestias beatae amet.</h1>
            </div>
           
        </div>
        <div className="w-1/3 ">
        <div className="start flex flex-row -mt-8 w-[90vw] p-5 gap-5 px-2 md:p-5  ">
            <div className="md:px-5   md:ml-40 md:py-2 border-[1px] border-zinc-500 rounded-full font-light  md:uppercase">start the project</div>
            <div className="w-10   h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full ">
                <span className="rotate-[45deg]"><FaArrowUp /></span></div>
        </div>
        </div>
    </div>
    <div  className="eyes  w-full h-[40vh] md:h-[35vh] -mt-20 overflow-hidden">
      <div 
        
        className=" relative w-full h-full bg-cover bg-center "
      >
        <div className=" absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className=" flex  items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
            <div className=" relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2.8vw]"
              >
                <div className="w-[2vw] h-[2vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          <div className=" flex  items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
            <div className=" relative  w-2/3 h-2/3 rounded-full bg-zinc-900 ">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2.8vw]"
              >
                <div className="w-[2vw] h-[2vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full">
        <div className="md:w-[70%] -mt-10 -mb-10 p-5 ml-5">
                <h1 className="md:text-6xl">We save businesses from ugly and ineffective presentations.</h1>
        </div>
    </div>
    <div>
    </div>
    <div className="about w-full md:flex   block justify-between md:h-[50vh] mt-5 gap-5 p-5">
        <div className="w-1/3 ">
            <h1 className="text-xl font-light">About Us:</h1>
        </div>
        <div className="md:w-1/3 md:flex block w-full h-full p-5 leading-5  md:flex-col gap-2 ">
            <div className="w-full  ">
                <h1 className="text-2xl tracking-tighter pb-5 leading-none font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam est fugiat nisi molestias fuga aut? Minus qui ad voluptate?</h1>
            </div>
            <div className="w-full ">
                <h1 className="text-2xl tracking-tighter pb-5 leading-none font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa repellendus fuga quia ad quis ab soluta, molestias beatae amet.</h1>
            </div>
           
        </div>
        <div className="w-1/3 "></div>
    </div>
    <div data-scroll data-scroll-section data-scroll-speed="1">
        <div>
            <img className="mx-auto -mt-20  rounded-3xl" src="https://ochi.design/wp-content/uploads/2022/05/017091720030-1340x858.jpg" alt="" />
        </div>
    </div>
    <Marquee />
    
    
    </>
  )
}

export default About_us
