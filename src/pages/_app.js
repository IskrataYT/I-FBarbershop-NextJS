import "../styles/globals.css" // path to your globals.css
import { Analytics } from "@vercel/analytics/react" // import the Analytics component

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp

