// components/LanguageSwitcher.js
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import Button from "@/components/atoms/button"

export const LanguageSwitcher = () => {
  const { t } = useTranslation("common") // Specify the translation namespace here
  const router = useRouter()

  const changeLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <>
      <Button key="english" onClick={() => changeLanguage("en")} navbar={true}>
        {t("english")}
      </Button>

      <Button key="bulgarian" onClick={() => changeLanguage("bg")} navbar={true}>
        {t("bulgarian")}
      </Button>
    </>
  )
}
