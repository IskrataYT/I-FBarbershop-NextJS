import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";
import HeroSection from "@/components/organisms/heroSection";
import Introduction from "@/components/organisms/introduction";
import Text from "@/components/atoms/text";

export default function Home() {
    return(
        <div className="homepage">
            <Navbar/>
            <HeroSection/>
            <Introduction/>
            <Footer/>

        </div>
    )
}