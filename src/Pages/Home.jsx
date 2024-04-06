import About from "../components/About"
import Card from "../components/Card"
import Cards from "../components/Cards"
import Eyes from "../components/Eyes"
import Landing from "../components/Landing"
import Marquee from "../components/Marquee"
import LocomotiveScroll from 'locomotive-scroll'
import Navbar from "../components/Navbar"

function Home() {
    const locomotiveScroll=new LocomotiveScroll();
  return (
    <>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Cards />
      <Card />
      
    </>
  )
}

export default Home