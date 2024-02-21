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
      setNameText(t("fill-field"))
    }
    if (!phone) {
      setPhoneText(t("fill-field"))
    }
    if (!password) {
      setPasswordText(t("fill-field"))
    }
    if (!confirmPassword) {
      setConfirmPasswordText(t("fill-field"))
    }
    if (!name || !phone || !password || !confirmPassword) {
      return
    }
    
  
    if (!validatePhoneNumber(phone)) {
      setPhoneText(t("not-a-phone"))
      return
    }
  
    if (password.length < 8) {
      setPasswordText(t("pwd-too-short"))
      return
    }
  
    if (password !== confirmPassword) {
      setPasswordText(t("pwd-no-match"))
      setConfirmPasswordText(t("pwd-no-match"))
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
      if(data.message == "A user with this phone number already exists"){
        setPhoneText(t("common:phone-exists"))}
      console.log("Registration failed")
    }
  }

  return(
    <div className={styles.formBody}>
      <div className={styles.formContainer}>
        <Title margin="0 0 15% 0">{t("sign-up")}</Title>
        <InputField type="names" placeholder={t("name")} value={name} onChange={e => setName(e.target.value)}/>
        <p className={styles.errorText}>{nameText}</p>
        <InputField type="text" placeholder={t("phone")}  value={phone} onChange={e => setPhone(e.target.value)}/>
        <p className={styles.errorText}>{phoneText}</p>
        <InputField type="password" placeholder={t("pwd")}  value={password} onChange={e => setPassword(e.target.value)}/>
        <p className={styles.errorText}>{passwordText}</p>
        <InputField type="password" placeholder={t("confirm-pwd")}  value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
        <p className={styles.errorText}>{confirmPasswordText}</p>
        <Button secondary to="/sign-in">{t("acc-sign-in")}</Button>
        <Button primary margin="5% 0 0 0" onClick={handleSignUp}>{t("sign-up")}</Button>
      </div>
    </div>
  )
}

export default SignUpForm 
