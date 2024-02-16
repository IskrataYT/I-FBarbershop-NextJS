import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"
import styles from "./css/productPage.module.css"
import Title from "@/components/atoms/title"
import Text from "@/components/atoms/text"

export default function productPageLayout({product}) {
  return(
    <div className="homepage">
      <Navbar/>
      <div className={styles.container}>
        <img className={styles.productImg} src={product.imgPath}></img>
        <Title>{product.title}</Title>
        <Text>{product.description}</Text>
        <p className={styles.quantity}>8 remaining in stock</p>  
      </div>
      <Footer/>
    </div>
  )
}