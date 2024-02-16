import styles from "./css/Title.module.css"
import React from "react"

const Title = React.forwardRef(({ children, secondary, margin, padding }, ref) => {
  const titleStyle = secondary ? `${styles.secondary}` : styles.title

  return (
    <h1 className={titleStyle} style={{ margin: margin, padding: padding }} ref={ref}>
      {children}
    </h1>
  )
})

Title.displayName = "Title"

export default Title




