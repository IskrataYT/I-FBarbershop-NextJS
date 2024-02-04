import React, { useEffect, useState, useRef } from "react";
import Text from "../atoms/text";
import Title from "../atoms/title";
import Button from "../atoms/button";
import Image from "next/image";
import styles from "./css/heroSection.module.css";
import Typed from "typed.js";

const HeroSection = () => {
    const [isMobile, setIsMobile] = useState(false);
    const el = useRef(null);

    useEffect(() => {
      if (el && el.current) { // Check that the ref is not null
        const typed = new Typed(el.current, {
          strings: [
            "Cutting Edge Style, Classic Comfort",
            "Experience the fusion of tradition and innovation",
            "Your style is our masterpiece",
          ],
          startDelay: 300,
          typeSpeed: 75,
          backDelay: 3000,
          backSpeed: 50,
          loop: true,
          showCursor: false,
        });
    
        // Destroy Typed instance on unmounting 
        // to prevent memory leaks
        return () => {
          typed.destroy();
        };
      }
    }, [isMobile]); // Empty dependency array ensures the effect runs after the component mounts
    

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 640);
      };
    
      handleResize(); // Call the function once to set the initial state
    
      window.addEventListener("resize", handleResize);
    
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    

  return (
    <div className={styles.heroSection}>
      {!isMobile && (
        <div className={styles.background}>
          <video autoPlay loop muted className={styles.vid}>
            <source src="Background1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
          </video>
          <div className={styles.TextOver}>
            <Image src="/logo.svg" height={200} width={200} alt="fbaf" className={styles.logo}/>
            <Title ref={el} key={isMobile} margin="8% 0 8% 0">
            </Title>
            <Text>
              Experience the fusion of tradition and innovation at our barbershop. Where every snip is a step towards perfection, and your style is our masterpiece.
            </Text>
            <Button to="/book-an-appointment" margin="40% 0 0 0" primary> 
              Book Now
            </Button>
          </div>
        </div>
      )}
      {isMobile && (
        <div className={styles.background}>
          <img src="/Background-Long.jpg" width="100%" alt='yes' />
          <div className={styles.TextOver}>
            <Title margin="8% 0 8% 0" ref={el} padding="0 5% 0 5%">
            </Title>
            <Text padding="0 5% 0 5%" key={isMobile}>
              Experience the fusion of tradition and innovation at our barbershop. Where every snip is a step towards perfection, and your style is our masterpiece.
            </Text>
            <Button to="/book-an-appointment" primary margin="15% 0 0 0">
              Book Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
