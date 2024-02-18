import Navbar from "@/components/organisms/navbar.js"
import Footer from "@/components/organisms/footer"
import styles from "./css/productPage.module.css"
import Title from "@/components/atoms/title"
import Text from "@/components/atoms/text"
import { useTranslation } from "next-i18next"



export default function ProductPageLayout({product}) {
  const { t } = useTranslation("common")
  return(
    <div className={"product" + product.id}   style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh", height: "auto"}}>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img className={styles.productImg} src={product.imageUrl}></img>
        </div>
        <div className={styles.textContainer}>
          <Title>{product.name}</Title>
          <Text>{product.description}</Text>
          <div className={styles.priceContainer}>
            <p className={styles.price}>{product.price} {t("bgn")}</p>  
            <p className={styles.quantity}><em>8 {t("remaining")}</em></p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}