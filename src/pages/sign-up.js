import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"
import SignUpForm from "@/components/organisms/signUpForm"

export default function SignUp() {
  return(
    <div className="signUpPage" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh"}}>
      <Navbar/>
      <SignUpForm/>
      <Footer/>
    </div>
  )
}