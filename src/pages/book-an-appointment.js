import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";
import ChooseAService from "@/components/organisms/chooseAService";

export default function Booking() {
    return(
        <div className="BookingPage" style={{ display: 'flex', flexDirection: 'column' , minHeight: '100vh',}}>
            <Navbar/>
            <ChooseAService></ChooseAService>
            <Footer/>
        </div>
    )
}
