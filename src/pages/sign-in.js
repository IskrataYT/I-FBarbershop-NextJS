import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"
import SignInForm from "@/components/organisms/signInForm"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ["common"]), // Use 'common' namespace
    },
  }
}

export default function SignIn() {
  return(
    <div className="signInPage" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh", width: "100vw",}}>
      <Navbar/>
      <SignInForm/>
      <Footer/>
    </div>
  )
}