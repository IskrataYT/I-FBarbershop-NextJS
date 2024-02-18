import React, { useState } from "react"
import Title from "../atoms/title"
import InputField from "../molecules/input"
import styles from "./css/signInForm.module.css"
import Button from "../atoms/button"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

const SignUpForm = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()
  const [nameText, setNameText] = useState("")
  const [phoneText, setPhoneText] = useState("")
  const [passwordText, setPasswordText] = useState("")
  const [confirmPasswordText, setConfirmPasswordText] = useState("")

  const { t } = useTranslation("common")

  const validatePhoneNumber = (phone) => {
    const re = /^\d{10}$/
    return re.test(phone)
  }

  const handleSignUp = async () => {
    setNameText("")
    setPhoneText("")
    setPasswordText("")
    setConfirmPasswordText("")

    if (!name) {
      setNameText("Please fill out this field")
    }
    if (!phone) {
      setPhoneText("Please fill out this field")
    }
    if (!password) {
      setPasswordText("Please fill out this field")
    }
    if (!confirmPassword) {
      setConfirmPasswordText("Please fill out this field")
    }
    if (!name || !phone || !password || !confirmPassword) {
      return
    }
    
  
    if (!validatePhoneNumber(phone)) {
      setPhoneText("This is not a phone number")
      return
    }
  
    if (password.length < 8) {
      setPasswordText("Password must be at least 8 characters long")
      return
    }
  
    if (password !== confirmPassword) {
      setPasswordText("Passwords do not match")
      setConfirmPasswordText("Passwords do not match")
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
  
    const data = await response.json()
  
    if (response.ok) {
      // Save the token in localStorage
      localStorage.setItem("token", data.token)
      router.push("/")
    } else {
      console.log("Registration failed")
    }
  }

  return(
    <div className={styles.formBody}>
      <div className={styles.formContainer}>
        <Title margin="0 0 15% 0">{t("sign-up")}</Title>
        <InputField type="names" placeholder="Name" margin="0 0 10% 0" value={name} onChange={e => setName(e.target.value)}/>
        <p className={styles.errorText}>{nameText}</p>
        <InputField type="text" placeholder="Phone Number" margin="0 0 10% 0" value={phone} onChange={e => setPhone(e.target.value)}/>
        <p className={styles.errorText}>{phoneText}</p>
        <InputField type="password" placeholder="Password" margin="0 0 10% 0" value={password} onChange={e => setPassword(e.target.value)}/>
        <p className={styles.errorText}>{passwordText}</p>
        <InputField type="password" placeholder="Confirm Password" margin="0 0 10% 0" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
        <p className={styles.errorText}>{confirmPasswordText}</p>
        <Button secondary to="/sign-in">{t("acc-sign-in")}</Button>
        <Button primary margin="5% 0 0 0" onClick={handleSignUp}>{t("sign-up")}</Button>
      </div>
    </div>
  )
}

export default SignUpForm
