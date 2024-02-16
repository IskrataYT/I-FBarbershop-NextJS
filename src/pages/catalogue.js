import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"
import CatalogueItems from "@/components/organisms/catalogueItems"
"./products.json"

export default function Catalogue() {
  return(
    <div className="CataloguePage">
      <Navbar/>
      <CatalogueItems/>
      <Footer/>
    </div>
  )
}
