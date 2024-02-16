// ChooseADateAndTime.js

import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import TimeCard from "../molecules/timeCard"
import Title from "../atoms/title"
import styles from "./css/dateAndTime.module.css"

const ChooseADateAndTime = ({ nextStep }) => {
  const [startDate, setStartDate] = useState(new Date())
  const [bookedTimes, setBookedTimes] = useState([])

  useEffect(() => {
    // Fetch booked times from the server
    fetchBookedTimes()
  }, [])

  const fetchBookedTimes = async () => {
    try {
      const response = await fetch("/api/bookedTimes") // Use Next.js API route
      const data = await response.json()
      console.log("Fetched booked times:", data.bookedTimes)
      setBookedTimes(data.bookedTimes)
    } catch (error) {
      console.error(error)
    }
  }

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
  ].filter(time => !bookedTimes.map(bookedTime => bookedTime.toLowerCase()).includes(time.time.toLowerCase()))

  const handleDateChange = (date) => {
    setStartDate(date)
  }

  const handleTimeSelection = (time) => {
    const formattedDate = startDate.toLocaleDateString("en-GB")
    nextStep({ date: formattedDate, time: time.time })
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.component}>
          <Title margin="0 0 8% 0">Choose a Date:</Title>
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
            <TimeCard key={index} time={time} onSelect={handleTimeSelection} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChooseADateAndTime
