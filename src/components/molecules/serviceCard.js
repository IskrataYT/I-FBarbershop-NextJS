// ServiceCard.js
import React from "react"
import Styles from "./css/card.module.css"
import Title from "../atoms/title"
import Text from "../atoms/text"
import { useTranslation } from "next-i18next"

const ServiceCard = ({ service, onSelect }) => {
  const { t } = useTranslation("common")
  const handleClick = () => {
    onSelect(service)
  }

  return (
    <button className={Styles.container} onClick={handleClick}>
      <Title secondary>{service.title}</Title>
      <div className={Styles.subtitleContainer}>
        <Text>{service.price} {t("bgn")}⠀•⠀</Text>
        <Text>{service.duration}</Text>
      </div>
    </button>
  )
}

export default ServiceCard
