import "react-datepicker/dist/react-datepicker.css"
import Title from "../atoms/title"
import styles from "./css/dateAndTime.module.css"
import Text from "../atoms/text"
import Button from "../atoms/button"
import { useTranslation } from "next-i18next"

const SuccessScreen = ({details, goHome, bookMore}) => {
  const { t } = useTranslation("common")
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.component2}>
          <Title>{t("successful-book")}</Title>
          <Text>{t("booked-for")}{details.date}, {details.time}.</Text>
          <div className={styles.buttons}>
            <Button primary onClick={goHome}>{t("return-home")}</Button>
            <Button primary onClick={bookMore}>{t("book-another")}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessScreen