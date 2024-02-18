import React, { useReducer, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"
import ChooseAService from "@/components/organisms/chooseAService"
import ChooseADateAndTime from "@/components/organisms/chooseADate&Time"
import SuccessScreen from "@/components/organisms/successScreen"

const initialState = { step: 1, bookingDetails: {} }

function reducer(state, action) {
  switch (action.type) {
  case "nextStep":
    return { ...state, bookingDetails: { ...state.bookingDetails, ...action.details }, step: state.step + 1 }
  case "previousStep":
    return { ...state, step: state.step - 1 }
  case "reset":
    return initialState
  case "success":
    return {step: state.step + 1}
  default:
    throw new Error()
  }
}


export default function Booking() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [sessionExists, setSessionExists] = useState(false)
  const [userData, setUserData] = useState(null)
  const router = useRouter()
  const [bookingDetails, setBookingDetails] = useState({})

  const nextStep = (details) => {
    dispatch({ type: "nextStep", details: details })
  }

  const previousStep = () => {
    dispatch({ type: "previousStep" })
  } 

  const successScreen = () =>{
    dispatch({ type: "success" })
  }
  

  useEffect(() => {
    // Get the token from localStorage or cookies
    const token = localStorage.getItem("token") // Or get it from cookies
  
    fetch("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
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
            setBookingDetails(state.bookingDetails)
            successScreen()
          } else {
            alert("Booking failed. Please try again.")
          }
        })
    }
  }, [state, userData])

  const goHome = () => {
    dispatch({type: "reset"})
    router.push("/home")
  }
  const bookMore = () => {
    dispatch({type: "reset"})
    window.location.reload()
  }

  return(
    <div className="BookingPage"  style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh"}}>
      <Navbar/>
      {sessionExists ? (
        <>
          {state.step === 1 && <ChooseAService nextStep={nextStep} />}
          {state.step === 2 && <ChooseADateAndTime nextStep={nextStep} previousStep={previousStep} />}
          {state.step === 4 && <SuccessScreen details={bookingDetails} goHome={goHome} bookMore={bookMore}></SuccessScreen>}
        </>
      ) : null}
      <Footer/>
    </div>
  )
}





