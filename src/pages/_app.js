import "../styles/globals.css" // path to your globals.css
import { Analytics } from "@vercel/analytics/react" // import the Analytics component
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default MyApp

