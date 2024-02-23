import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"
import AboutPage from "@/components/organisms/about"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { NextSeo } from "next-seo"

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ["common"]), // Use 'common' namespace
    },
  }
}

export default function About() {
  return(
    <div className="AboutPage" style={{ display: "flex", flexDirection: "column" , minHeight: "100vh",}}>
      <NextSeo title="I&F Barbershop - About" description="Discover I&F Barbershop on our About page. Experience tradition and trend as our skilled barbers provide top-notch grooming services. Join us for a unique haircut experience that suits your style" />
      <Navbar/>
      <AboutPage/>
      <Footer/>
    </div>
  )
}
