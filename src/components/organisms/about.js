import styles from "./css/about.module.css"
import Introduction from "./introduction.js"
import Contact from "../molecules/contact.js"

const AboutPage = () => {

  return(
    <div className={styles.aboutContainer}>
      <Introduction title={"Welcome to I&F Barbershop"}>Welcome to I&F Barbershop, where style and precision meet. We’re more than just a barbershop - we’re a place where tradition meets trend, and where every haircut is a masterpiece in the making. Step into our world and experience the magic of a perfect haircut.</Introduction>
      <Introduction isLeft title={"Our Story"}> I&F Barbershop was born in 2010, out of a passion for timeless style and the art of barbering. Our founders, Iskren and Filip, started with a simple mission: to bring back the classic barbershop experience. Over the years, we’ve grown from a small shop to a community staple, but our commitment to quality and craftsmanship remains the same.</Introduction>
      <Introduction title={"Our Services"}>At I&F Barbershop, we offer a wide range of services tailored to meet the unique needs of our clients. From classic cuts and close shaves to contemporary styles and beard trims, our barbers are equipped with the skills and tools to ensure you leave looking and feeling your best.</Introduction>
      <Introduction isLeft title={"Our Commitment"}>Quality, comfort, and satisfaction are at the heart of everything we do at I&F Barbershop. We use only the finest grooming products and uphold the highest standards of hygiene. Our barbers continuously hone their skills to stay at the forefront of the latest trends and techniques.</Introduction>
      <Introduction title={"Join the I&F Community"}>When you step into I&F Barbershop, you’re not just getting a haircut, you’re joining a community. We value the relationships we build with our clients and strive to create an environment where everyone feels welcome. Come in for a cut, stay for the camaraderie.</Introduction>
      <Contact />
      
    </div>
  )
}

export default AboutPage 