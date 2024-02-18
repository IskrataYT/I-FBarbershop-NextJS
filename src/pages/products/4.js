import ProductPageLayout from "../../layouts/productPage.js"
import products from "../../models/products.json"

  
const ProductOne = () => {

  const product = products.find(product => product.id === 4)

  return(
    <ProductPageLayout product={product}/>
  )
}

export default ProductOne