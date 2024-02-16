import styles from "./css/catalogueItems.module.css"
import ButtonCard from "../molecules/buttonCard"
import products from "../../models/products.json"
const CatalogueItems = () => {

  return(
    <div className={styles.catalogueContainer}>
      <div className={styles.catalogueGrid}>
        {products.map(product => (
          <ButtonCard key={product.id} product={product} to={`/products/${product.id}`} />
        ))}

      </div>
    </div>

  )
}

export default CatalogueItems 