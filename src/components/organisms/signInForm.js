import Title from "../atoms/title"
import InputField from "../molecules/input"
import styles from "./css/signInForm.module.css"
import Button from "../atoms/button"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useTranslation } from "next-i18next"

const SignInForm = () => {

  const router = useRouter()
  const { redirected } = router.query
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [phoneText, setPhoneText] = useState("")
  const [passwordText, setPasswordText] = useState("")

  const { t } = useTranslation("common")

  const validatePhoneNumber = (phone) => {
    const re = /^\d{10}$/
    return re.test(phone)
  }


  const handleSignIn = async () => {
    if (!phone) {
      setPhoneText(t("fill-field"))
      if(!password){
        setPasswordText(t("fill-field"))
      }
    } else {
      if(!password){
        setPasswordText(t("fill-field"))
      } 
    }

    if(!phone || !password){
      return
    }
  
    if (!validatePhoneNumber(phone)) {
      setPhoneText(t("not-a-phone"))
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
        setPhoneText(t("wrong-phone"))
      } else {
        if(data.message == "Invalid password") {
          setPasswordText(t("pwd-wrong"))
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
        <Title margin="0 0 15% 0">{t("sign-in")}</Title>
        {showText && <p className={styles.message}>{t("please-sign-in")}</p>}
        <InputField type="text" placeholder={t("phone")} value={phone} onChange={e => setPhone(e.target.value)}/>
        <p className={styles.errorText}>{phoneText}</p>
        <InputField type="password" placeholder={t("pwd")} value={password} onChange={e => setPassword(e.target.value)}/>
        <p className={styles.errorText}>{passwordText}</p>
        <Button secondary  to="sign-up">{t("no-acc-sign-up")}</Button>
        <Button primary margin="5% 0 0 0" onClick={handleSignIn}>{t("sign-in")}</Button>
      </div>) : (<div className={styles.formContainer}>
        <Title margin="0 0 15% 0">{t("sign-in")}</Title>
        <InputField type="text" placeholder={t("phone")} value={phone} onChange={e => setPhone(e.target.value)}/>
        <p className={styles.errorText}>{phoneText}</p>
        <InputField type="password" placeholder={t("pwd")} value={password} onChange={e => setPassword(e.target.value)}/>
        <p className={styles.errorText}>{passwordText}</p>
        <Button secondary  to="sign-up">{t("no-acc-sign-up")}</Button>
        <Button primary margin="5% 0 0 0" onClick={handleSignIn} >{t("sign-in")}</Button>
      </div>)}        
    </div>
  )
}

export default SignInForm