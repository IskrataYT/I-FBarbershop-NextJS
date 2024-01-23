// Logo.js
import Image from 'next/image';

const Logo = () => {
  return (
      <Image
        src="/logo.svg" // Path to your logo image in the public directory
        alt="Logo"
        width={70} // Adjust as needed
        height={70} // Adjust as needed
      />
  );
};

export default Logo;
