import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"
import HeroSection from "@/components/organisms/heroSection"
import Introduction from "@/components/organisms/introduction"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { NextSeo } from "next-seo"

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ["common"]), // Use 'common' namespace
    },
  }
}

export default function Home() {
  const { t } = useTranslation("common")
  return(
    <div className="homepage">
      <NextSeo title="I&F Barbershop - Home" description="Welcome to I&F Barbershop. Visit our Home page to learn about our exceptional grooming services, explore our product catalogue, book an appointment, and more. Experience the perfect blend of tradition and trend today." />
      <Navbar/>
      <HeroSection/>
      <Introduction title={t("about-us")} hasButton>{t("intro")}</Introduction>
      <Footer/>

    </div>
  )
}