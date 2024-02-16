import styles from "./css/Text.module.css"

const Text = ({ children, isSecondary, isNavbar, margin, padding }) => {
  let textStyle = styles.text

  if (isSecondary) {
    textStyle = ` ${styles.secondary}`
  }

  if (isNavbar) {
    textStyle = ` ${styles.navbar}`
  }

  return (
    <p className={textStyle} style={{ margin: margin, padding: padding }}>
      {children}
    </p>
  )
}

export default Text


