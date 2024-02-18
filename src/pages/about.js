import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"
import AboutPage from "@/components/organisms/about"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

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
      <Navbar/>
      <AboutPage/>
      <Footer/>
    </div>
  )
}
