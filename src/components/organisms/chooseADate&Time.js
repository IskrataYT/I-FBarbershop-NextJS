import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import TimeCard from "../molecules/timeCard"
import Title from "../atoms/title"
import styles from "./css/dateAndTime.module.css"

const ChooseADateAndTime = ({ nextStep }) => {
  const [startDate, setStartDate] = useState(new Date())
  // const [selectedTime, setSelectedTime] = useState(null) // Commented out as it's not being used

  const times = [
    { time: "9:00" },
    { time: "10:00" },
    { time: "11:00" },
    { time: "12:00" },
    { time: "13:00" },
    { time: "14:00" },
    { time: "15:00" },
    { time: "16:00" },
    // Add more services here...
  ]

  const handleDateChange = (date) => {
    setStartDate(date)
  }

  const handleTimeSelection = (time) => {
    // setSelectedTime(time.time) // Commented out as it's not being used
    const formattedDate = startDate.toLocaleDateString("en-GB")
    nextStep({ date: formattedDate, time: time.time })
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.component}>
          <Title  margin="0 0 8% 0">Choose a Date:</Title>
          <DatePicker 
            selected={startDate} 
            onChange={handleDateChange} 
            inline // Show only the calendar
            minDate={new Date()} // Disable past dates
          />
        </div>
        <div className={styles.component}>            
          <Title margin="0 0 8% 0">Choose a time:</Title>
          {times.map((time, index) => (
            <TimeCard key={index} time={time} onSelect={handleTimeSelection}/>
          ))}
        </div>
      </div>
    </div>

  )
}

export default ChooseADateAndTime


