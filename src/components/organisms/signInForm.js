import Title from "../atoms/title"
import InputField from "../molecules/input"
import styles from "./css/signInForm.module.css"
import Button from "../atoms/button"
import { useRouter } from "next/router"
import Text from "../atoms/text"
import { useEffect, useState } from "react"

const SignInForm = () => {

  const router = useRouter()
  const { redirected } = router.query
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const validatePhoneNumber = (phone) => {
    const re = /^\d{10}$/
    return re.test(phone)
  }


  const handleSignIn = async () => {

    if (!phone || !password) {
      console.log("Please fill out all fields")
      return
    }

    if (!validatePhoneNumber(phone)) {
      console.log("Invalid phone number")
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
  
    if (response.ok) {
      router.push("/home")
    } else {
      console.log("Login failed")
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
        {showText && <Text margin="0 0 10% 0">Please Sign In First</Text>}
        <InputField type="text" placeholder="Phone Number" margin="0 0 10% 0"value={phone} onChange={e => setPhone(e.target.value)}/>
        <InputField type="password" placeholder="Password" margin="0 0 10% 0" value={password} onChange={e => setPassword(e.target.value)}/>
        <Button secondary  to="sign-up">Don’t have an account? Click here to sign up.</Button>
        <Button primary margin="5% 0 0 0" onClick={handleSignIn}>Sign In</Button>
      </div>) : (<div className={styles.formContainer}>
        <Title margin="0 0 15% 0">Sign In</Title>
        <InputField type="text" placeholder="Phone Number" margin="0 0 10% 0" value={phone} onChange={e => setPhone(e.target.value)}/>
        <InputField type="password" placeholder="Password" margin="0 0 10% 0" value={password} onChange={e => setPassword(e.target.value)}/>
        <Button secondary  to="sign-up">Don’t have an account? Click here to sign up.</Button>
        <Button primary margin="5% 0 0 0" onClick={handleSignIn}>Sign In</Button>
      </div>)}        
    </div>
  )
}

export default SignInForm
