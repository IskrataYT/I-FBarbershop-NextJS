import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"
import CatalogueItems from "@/components/organisms/catalogueItems"
"./products.json"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { NextSeo } from "next-seo"

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ["common"]), // Use 'common' namespace
    },
  }
}

export default function Catalogue() {
  return(
    <div className="CataloguePage">
      <NextSeo title="I&F Barbershop - Catalogue" description="Explore our Catalogue page at I&F Barbershop to discover a wide range of hair care and styling products. Enhance your style and maintain your look with our premium selection." />
      <Navbar/>
      <CatalogueItems/>
      <Footer/>
    </div>
  )
}
