import Title from "../atoms/title"
import InputField from "../molecules/input"
import styles from "./css/signInForm.module.css"
import Button from "../atoms/button"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const SignInForm = () => {

  const router = useRouter()
  const { redirected } = router.query
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [phoneText, setPhoneText] = useState("")
  const [passwordText, setPasswordText] = useState("")

  const validatePhoneNumber = (phone) => {
    const re = /^\d{10}$/
    return re.test(phone)
  }


  const handleSignIn = async () => {
    if (!phone) {
      setPhoneText("Please fill out this field")
      if(!password){
        setPasswordText("Please fill out this field")
      }
    } else {
      if(!password){
        setPasswordText("Please fill out this field")
      } 
    }
  
    if (!validatePhoneNumber(phone)) {
      setPhoneText("This is not a phone number")
      return
    }
  
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phone: phone,
        password: password
      })
    })
  
    const data = await response.json()
  
    if (response.ok) {
      // Save the token in localStorage
      localStorage.setItem("token", data.token)
      if(redirected){
        router.push("/book-an-appointment")
      }
      else{
        router.push("/")
      }
    } else {
      if(data.message == "Invalid Phone number"){
        setPhoneText("Incorrect Phone Number")
      } else {
        if(data.message == "Invalid password") {
          setPasswordText("Incorrect Password")
        }
      }
    }
  }
  

  const [showText, setShowText] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false)
    }, 5100) // 6000 milliseconds = 6 seconds
  
    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer)
  }, [])

  return(
    <div className={styles.formBody}>
      {redirected ? (<div className={styles.formContainer}>
        <Title margin="0 0 15% 0">Sign In</Title>
        {showText && <p className={styles.message}>Please sign in first</p>}
        <InputField type="text" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)}/>
        <p className={styles.errorText}>{phoneText}</p>
        <InputField type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        <p className={styles.errorText}>{passwordText}</p>
        <Button secondary  to="sign-up">Don’t have an account? Click here to sign up.</Button>
        <Button primary margin="5% 0 0 0" onClick={handleSignIn}>Sign In</Button>
      </div>) : (<div className={styles.formContainer}>
        <Title margin="0 0 15% 0">Sign In</Title>
        <InputField type="text" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)}/>
        <p className={styles.errorText}>{phoneText}</p>
        <InputField type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        <p className={styles.errorText}>{passwordText}</p>
        <Button secondary  to="sign-up">Don’t have an account? Click here to sign up.</Button>
        <Button primary margin="5% 0 0 0" onClick={handleSignIn} >Sign In</Button>
      </div>)}        
    </div>
  )
}

export default SignInForm