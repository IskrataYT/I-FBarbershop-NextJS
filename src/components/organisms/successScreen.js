import "react-datepicker/dist/react-datepicker.css"
import Title from "../atoms/title"
import styles from "./css/dateAndTime.module.css"
import Text from "../atoms/text"
import Button from "../atoms/button"

const SuccessScreen = ({details, goHome, bookMore}) => {

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.component2}>
          <Title>Successfully booked!</Title>
          <Text>Your hour has been successfully booked for {details.date}, {details.time}.</Text>
          <div className={styles.buttons}>
            <Button primary onClick={goHome}>Return Home</Button>
            <Button primary onClick={bookMore}>Book another</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessScreen