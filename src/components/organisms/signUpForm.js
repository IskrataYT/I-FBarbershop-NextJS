import React, { useState } from "react"
import Title from "../atoms/title"
import InputField from "../molecules/input"
import styles from "./css/signInForm.module.css"
import Button from "../atoms/button"
import { useRouter } from "next/router"

const SignUpForm = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter();

  const validatePhoneNumber = (phone) => {
    const re = /^\d{10}$/
    return re.test(phone)
  }

  const handleSignUp = async () => {

    if (!name || !phone || !password || !confirmPassword) {
      console.log("Please fill out all fields")
      return
    }

    if (!validatePhoneNumber(phone)) {
      console.log("Invalid phone number")
      return
    }

    if (password.length < 8) {
      console.log("Password should be at least 8 characters long")
      return
    }

    if (password !== confirmPassword) {
      console.log("Passwords do not match")
      return
    }

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        password: password
      })
    })
  
    if (response.ok) {
      router.push("/home")
    } else {
      console.log("Registration failed")
    }
  }

  return(
    <div className={styles.formBody}>
      <div className={styles.formContainer}>
        <Title margin="0 0 15% 0">Sign Up</Title>
        <InputField type="names" placeholder="Name" margin="0 0 10% 0" value={name} onChange={e => setName(e.target.value)}/>
        <InputField type="text" placeholder="Phone Number" margin="0 0 10% 0" value={phone} onChange={e => setPhone(e.target.value)}/>
        <InputField type="password" placeholder="Password" margin="0 0 10% 0" value={password} onChange={e => setPassword(e.target.value)}/>
        <InputField type="password" placeholder="Confirm Password" margin="0 0 10% 0" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
        <Button secondary to="/sign-in">Already have an account? Click here to sign in.</Button>
        <Button primary margin="5% 0 0 0" onClick={handleSignUp}>Sign Up</Button>
      </div>
    </div>
  )
}

export default SignUpForm
