import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import TimeCard from "../molecules/timeCard"
import Title from "../atoms/title"
import styles from "./css/dateAndTime.module.css"
import Text from "../atoms/text"
import { FaArrowLeft } from "react-icons/fa6"
import Button from "../atoms/button"

const ChooseADateAndTime = ({ nextStep, previousStep }) => {
  const [startDate, setStartDate] = useState(new Date())
  const [times, setTimes] = useState([])
  const [loading, setLoading] = useState(true)

  const defaultTimes = [
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

  const fetchBookings = async (date) => {
    try {
      const response = await fetch("/api/fetchBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date: date.toLocaleDateString("en-GB") }),
      })

      const data = await response.json()

      // Update the state based on the previous state
      setTimes(() =>
        defaultTimes.filter((time) => !data.times.includes(time.time))
      )

      // Fetching is successful, set loading to false
      setLoading(false)
    } catch (error) {
      console.error("Error fetching bookings:", error)
      setLoading(false) // Set loading to false in case of an error
    }
  }

  const handleDateChange = async (date) => {
    console.log("New date:", date)
    setStartDate(date)
    setLoading(true) // Set loading to true when changing the date
  }

  useEffect(() => {
    // Fetch bookings for the current date when the component mounts
    fetchBookings(startDate)
  }, [startDate]) // Trigger useEffect when startDate changes

  const handleTimeSelection = (time) => {
    const formattedDate = startDate.toLocaleDateString("en-GB")
    nextStep({ date: formattedDate, time: time.time })
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Button onClick={previousStep}><FaArrowLeft /></Button>
        <div className={styles.component}>
          <Title margin="0 0 8% 0">Choose a Date:</Title>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              handleDateChange(date)
              fetchBookings(date)
            }}
            inline // Show only the calendar
            minDate={new Date()} // Disable past dates
          />
        </div>
        <div className={styles.component}>
          <Title margin="0 0 8% 0">Choose a time:</Title>
          {loading ? (
            <Text>Loading..</Text>
          ) : (
            times.map((time, index) => (
              <TimeCard
                key={index}
                time={time}
                onSelect={handleTimeSelection}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default ChooseADateAndTime






