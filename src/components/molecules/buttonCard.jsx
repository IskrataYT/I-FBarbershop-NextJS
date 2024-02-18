import React from "react"
import styles from "./css/buttonCard.module.css"
import Button from "../atoms/button"
import { useTranslation } from "next-i18next"

const ButtonCard = ({ product, to }) => {
  const { t } = useTranslation("common")
  return (
    <div className={styles.customButton}>
      <img src={product.imageUrl} alt="Custom Image" className={styles.customButtonImage}/>
      <h1 className={styles.cardTitle}>{product.name}</h1>
      <p className={styles.cardText}>{product.price} {t("bgn")}</p>
      <em><p className={styles.cardText2}>8 {t("remaining")}</p></em>
      <Button to={to} className={styles.customButtonText} primary>{t("learn-more")}</Button>
    </div>
  )
}

export default ButtonCard