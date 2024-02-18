import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"
import CatalogueItems from "@/components/organisms/catalogueItems"
"./products.json"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

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
      <Navbar/>
      <CatalogueItems/>
      <Footer/>
    </div>
  )
}
