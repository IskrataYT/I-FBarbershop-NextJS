import styles from "./css/about.module.css"
import Introduction from "./introduction.js"
import Contact from "../molecules/contact.js"

const AboutPage = () => {

  return(
    <div className={styles.aboutContainer}>
      <Introduction title={"Welcome to I&F Barbershop"}>Your one-stop destination for all your grooming needs. We are more than just a barbershop; we are a community that values style, artistry, and tradition. Our skilled barbers are dedicated to providing you with an exceptional experience and a haircut that suits your individual style.</Introduction>
      <Introduction isLeft title={"Our Story"}>I&F Barbershop was born out of a passion for the craft of barbering. Our founders, whose initials inspire our name, envisioned a place where tradition meets modernity, and where every haircut is a personalized work of art. Since our doors first opened, we have been committed to keeping this vision alive.</Introduction>
      <Introduction title={"Our Services"}>At I&F Barbershop, we offer a wide range of services tailored to meet the unique needs of our clients. From classic cuts and close shaves to contemporary styles and beard trims, our barbers are equipped with the skills and tools to ensure you leave looking and feeling your best.</Introduction>
      <Introduction isLeft title={"Our Commitment"}>Quality, comfort, and satisfaction are at the heart of everything we do at I&F Barbershop. We use only the finest grooming products and uphold the highest standards of hygiene. Our barbers continuously hone their skills to stay at the forefront of the latest trends and techniques.</Introduction>
      <Introduction title={"Join the I&F Community"}>When you step into I&F Barbershop, you’re not just getting a haircut, you’re joining a community. We value the relationships we build with our clients and strive to create an environment where everyone feels welcome. Come in for a cut, stay for the camaraderie.</Introduction>
      <Contact />
      
    </div>
  )
}

export default AboutPage 