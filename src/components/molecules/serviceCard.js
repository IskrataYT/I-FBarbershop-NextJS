// ServiceCard.js
import React from "react"
import Styles from "./css/card.module.css"
import Title from "../atoms/title"
import Text from "../atoms/text"

const ServiceCard = ({ service, onSelect }) => {
  const handleClick = () => {
    onSelect(service)
  }

  return (
    <button className={Styles.container} onClick={handleClick}>
      <Title secondary>{service.title}</Title>
      <div className={Styles.subtitleContainer}>
        <Text>{service.price} BGN⠀•⠀</Text>
        <Text>{service.duration}</Text>
      </div>
    </button>
  )
}

export default ServiceCard
