

function Contact() {
  return (
    <div className="pt-2 w-full h-[90vh]">
        
        <div className="md:mt-32 mt-24 ">
        <h1 className="md:text-6xl text-2xl text-zinc-400 uppercase font-semibold ml-8  md:ml-5">contact us:</h1>
            <form className="flex flex-col md:mt-4 justify-center items-center mb-3 md:mb-0" >
                <div className="flex flex-col border-[1px] border-zinc-500 md:border-none md:p-0 p-4">
                <label className="md:ml-3 ml-2" htmlFor="Fname">First Name:</label>
                <input className="md:w-[40vw] rounded-2xl md:h-[3vw]" type="text" id="Fname" />
                <label className="md:ml-3 ml-2" htmlFor="Lname">Last Name:</label>
                <input className="md:w-[40vw] rounded-2xl md:h-[3vw]" type="text" id="Lname" />
                <label className="md:ml-3 ml-2" htmlFor="Email">Email:</label>
                <input className="md:w-[40vw] rounded-2xl md:h-[3vw]" type="Email" id="Email" />
                <label className="md:ml-3 ml-2" htmlFor="Password">Password:</label>
                <input className="md:w-[40vw] rounded-2xl md:h-[3vw]" type="password" id="Password" />
                <button className="md:w-[20vw] md:h-[2vw] w-[40vw]  rounded-full mt-2 bg-green-400 mx-auto" type="submit">Submit</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Contact