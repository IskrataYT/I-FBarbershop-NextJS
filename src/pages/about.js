import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"
import AboutPage from "@/components/organisms/about"


export default function About() {
  return(
    <div className="AboutPage" style={{ display: "flex", flexDirection: "column" , minHeight: "100vh",}}>
      <Navbar/>
      <AboutPage/>
      <Footer/>
    </div>
  )
}