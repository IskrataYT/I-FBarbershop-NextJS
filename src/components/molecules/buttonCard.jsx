import React from "react"
import styles from "./css/buttonCard.module.css"
import Button from "../atoms/button"

const ButtonCard = ({ product, to }) => {
  return (
    <div className={styles.customButton}>
      <img src={product.imageUrl} alt="Custom Image" className={styles.customButtonImage}/>
      <h1 className={styles.cardTitle}>{product.name}</h1>
      <p className={styles.cardText}>{product.price} BGN</p>
      <em><p className={styles.cardText2}>8 remaining in stock</p></em>
      <Button to={to} className={styles.customButtonText} primary>Learn More</Button>
    </div>
  )
}

export default ButtonCard