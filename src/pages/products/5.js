import ProductPageLayout from "../../layouts/productPage.js"
import products from "../../models/products.json"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ["common"]), // Use 'common' namespace
    },
  }
}
  
const ProductOne = () => {

  const product = products.find(product => product.id === 5)

  return(
    <ProductPageLayout product={product}/>
  )
}

export default ProductOne