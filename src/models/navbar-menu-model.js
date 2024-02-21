import Button from "@/components/atoms/button"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import { LanguageSwitcher } from "./LanguageSwitcher"

export const getRenderedKeysByComponent = (key) => {
  switch (key) {
  case "left-arrow":
    return ["account-settings", "theme", "language"]
  case "language":
    return ["left-arrow", "languageSelect"]
  default:
    return ["account-settings", "theme", "language"]
  }
}

export const getComponentByKey = (key, t, updateShowingKeysFunction, userSignedIn) => {
  switch (key) {
  case "left-arrow":
    return (
      <Button
        key={key}
        onClick={() => updateShowingKeysFunction()}
        navbar={true}
      >
        <FaArrowLeft />
      </Button>
    )
  case "languageSelect":
    return (
      <LanguageSwitcher
        key={key}
        updateShowingKeysFunction={updateShowingKeysFunction}
      />
    )
  case "language":
    return (
      <Button
        key={key}
        onClick={() => updateShowingKeysFunction()}
        navbar={true}
      >
        {t("language")} <FaArrowRight />
      </Button>
    )
  case "account-settings":
    if (userSignedIn == true) {
      return (
        <Button
          key={key}
          onClick={() => {
            localStorage.removeItem("token")
            window.location.reload()
          }}
          navbar={true}
        >
          {t("sign-out")}
        </Button>
      )
    } else {
      return (
        <Button key={key} to="/sign-in" navbar={true}>
          {t("sign-in")}
        </Button>
      )
    }
  

  default:
    return null
  }
}