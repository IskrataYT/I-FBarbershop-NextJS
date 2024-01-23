import ButtonSecondary from "@/components/atoms/button";
import Navbar from "@/components/organisms/navbar";

export default function Home() {
    return(
        <div className="homepage">
            <Navbar/>
            <h1>This is the homepage</h1>
            <ButtonSecondary></ButtonSecondary>
        </div>
    )
}