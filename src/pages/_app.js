import "../styles/globals.css" // path to your globals.css
//import { Analytics } from "@vercel/analytics/react" // import the Analytics component
//import { SpeedInsights } from "@vercel/speed-insights/next"
import { useEffect } from "react"
import { appWithTranslation } from "next-i18next"
import "../../i18n" // Your i18n configuration file

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Ensure i18n is initialized on the client side
    if (window.i18n) window.i18n.init()
  }, [])
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)

