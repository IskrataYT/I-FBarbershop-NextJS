import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"
import SignInForm from "@/components/organisms/signInForm"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { NextSeo } from "next-seo"

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
      <NextSeo title="I&F Barbershop - Sign in" description="Returning to I&F Barbershop? Sign in on our Sign In page to manage your appointments, explore our catalogue, and more. Your next great haircut is just a click away" />
      <Navbar/>
      <SignInForm/>
      <Footer/>
    </div>
  )
}