import styles from "./css/introduction.module.css"
import Text from "../atoms/text"
import Title from "../atoms/title"
import Button from "../atoms/button"

const Introduction = ({isLeft, children, title, hasButton}) => {
  return (
    <div className={`${styles.introductionContainer} ${isLeft ? styles.reverse : ""}`}>
      <div className={styles.textSection}>
        <Title secondary margin="0 0 5% 0">{title}</Title>
        <Text>
          {children}
        </Text>
        {hasButton && <Button margin="25% 4% 4% 4%" primary to="/about">Learn More</Button>}
      </div>
      <div className={styles.imageSection}>
        <img alt="Image of a barbershop" src="/barbershop.jpg" width="100%"/>
      </div>
    </div>
  )
}

export default Introduction