import React, { useReducer, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"
import ChooseAService from "@/components/organisms/chooseAService"
import ChooseADateAndTime from "@/components/organisms/chooseADate&Time"

const initialState = { step: 1, bookingDetails: {} }

function reducer(state, action) {
  switch (action.type) {
  case "nextStep":
    return { ...state, bookingDetails: { ...state.bookingDetails, ...action.details }, step: state.step + 1 }
  case "reset":
    return initialState
  default:
    throw new Error()
  }
}

export default function Booking() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [sessionExists, setSessionExists] = useState(false)
  const [userData, setUserData] = useState(null)
  const router = useRouter()

  const nextStep = (details) => {
    dispatch({ type: "nextStep", details: details })
  }

  useEffect(() => {
    fetch("/api/user")
      .then(res => res.json())
      .then(data => {
        setSessionExists(data.loggedIn)
        setUserData(data)
        if (!data.loggedIn) {
          router.push("/sign-in?redirected=true")
        }
      })
  }, [])

  useEffect(() => {
    if (state.step === 3 && userData) {
      console.log("Booking Details:", state.bookingDetails)
      // Make a POST request to the /book API
      fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...state.bookingDetails,
          name: userData.username,
          phone: userData.phonenumber
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === "Booking created successfully") {
            alert("Booking successful!")
            dispatch({ type: "reset" })
          } else {
            alert("Booking failed. Please try again.")
          }
        })
    }
  }, [state, userData])



  return(
    <div className="BookingPage"  style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh"}}>
      <Navbar/>
      {sessionExists ? (
        <>
          {state.step === 1 && <ChooseAService nextStep={nextStep} />}
          {state.step === 2 && <ChooseADateAndTime nextStep={nextStep} />}
        </>
      ) : null}
      <Footer/>
    </div>
  )
}





