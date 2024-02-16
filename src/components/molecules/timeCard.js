// ServiceCard.js
import React from "react"
import Styles from "./css/timeCard.module.css"
import Text from "../atoms/text"

const TimeCard = ({ time, onSelect }) => {
  const handleClick = () => {
    onSelect(time)
  }

  return (
    <button className={Styles.container} onClick={handleClick}>
      <Text>{time.time}</Text>
    </button>
  )
}

export default TimeCard
