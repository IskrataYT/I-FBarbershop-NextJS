// Logo.js
import Image from "next/image"

const Logo = ({ isMobile }) => {
  return isMobile ? (
    <Image
      src="/logo.svg" // Path to your logo image in the public directory
      alt="Logo"
      width={50} // Mobile size
      height={50} // Mobile size
    />
  ) : (
    <Image
      src="/logo.svg" // Path to your logo image in the public directory
      alt="Logo"
      width={70} // Desktop size
      height={70} // Desktop size
    />
  )
}

export default Logo
