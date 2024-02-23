import styles from "./css/introduction.module.css"
import Text from "../atoms/text"
import Title from "../atoms/title"
import Button from "../atoms/button"
import { useTranslation } from "next-i18next"

const Introduction = ({isLeft, children, title, hasButton, imgUrl}) => {
  const { t } = useTranslation("common")
  return (
    <div className={`${styles.introductionContainer} ${isLeft ? styles.reverse : ""}`}>
      <div className={styles.textSection}>
        <Title secondary margin="0 0 5% 0">{title}</Title>
        <Text>
          {children}
        </Text>
        {hasButton && <Button margin="25% 4% 4% 4%" primary to="/about">{t("learn-more")}</Button>}
      </div>
      <div className={styles.imageSection}>
        <img alt="Image of a barbershop" src={imgUrl} width="100%"/>
      </div>
    </div>
  )
}

export default Introduction