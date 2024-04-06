

function Card() {
  return (
    <div  className="w-full flex flex-wrap md:flex-nowrap md:gap-10 items-center md:px-32 md:-m-10  md:h-[90vh] ">
        <div className="cardContainer md:w-1/2 md:flex-shrink-0 w-[70vw] mx-auto md:h-[50vh] h-[40vh]">
            <div className="card relative flex items-center justify-center w-full rounded-xl bg-[#004D43] h-full">
                
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className=" absolute border-[2px] md:left-1/3 border-zinc-200 py-1 md:px-5   rounded-full  left-10 -bottom-[-2vh] ml-7 md:bottom-10">&copy;2019-2024</button>
            </div>
        </div>
        <div className="cardContainer  md:flex flex-shrink-0  md:flex-nowrap w-full md:gap-10 md:w-1/2  md:mt-0 mt-5 md:h-[50vh]">
        <div className="card relative  block  w-[70vw] mx-auto mb-5 md:w-1/2 rounded-xl bg-[#000101]  h-[40vh] md:mb-10   md:h-full">
        <img className="absolute -ml-3 md:-ml-0 top-1/3 left-1/3" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className="absolute border-[2px] md:ml-10 border-zinc-200 py-1 px-5 rounded-full left-10 bottom-10">&copy;2019-2024</button>
       </div>
        <div className="card relative block   w-[70vw] mx-auto  md:w-1/2 rounded-xl bg-[#000101] mb-5  md:mb-10 h-[40vh]  md:h-full">
        <img className="absolute -ml-3 md:-ml-0 top-1/3 left-1/3" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className="absolute border-[2px] md:ml-10 border-zinc-200 py-1 px-5 rounded-full left-10 bottom-10">&copy;2019-2024</button>
       </div>
       
        
      </div>
    </div>
  )
}

export default Card