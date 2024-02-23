import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"
import SignUpForm from "@/components/organisms/signUpForm"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { NextSeo } from "next-seo"

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ["common"]), // Use 'common' namespace
    },
  }
}

export default function SignUp() {
  return(
    <div className="signUpPage" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh"}}>
      <NextSeo title="I&F Barbershop - Sign up" description="New to I&F Barbershop? Sign up on our Sign Up page to book appointments, explore our range of hair care and styling products, and stay updated on the latest trends. Join the I&F community today" />
      <Navbar/>
      <SignUpForm/>
      <Footer/>
    </div>
  )
}