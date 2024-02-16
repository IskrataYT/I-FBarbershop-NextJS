import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"
import HeroSection from "@/components/organisms/heroSection"
import Introduction from "@/components/organisms/introduction"

export default function Home() {
  return(
    <div className="homepage">
      <Navbar/>
      <HeroSection/>
      <Introduction title="About us" hasButton>Your one-stop destination for all your grooming needs. We are more than just a barbershop; we are a community that values style, artistry, and tradition. Our skilled barbers are dedicated to providing you with an exceptional experience and a haircut that suits your individual style.</Introduction>
      <Footer/>

    </div>
  )
}