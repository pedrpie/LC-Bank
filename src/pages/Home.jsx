import Navbar from "../components/Navbar";
import Login from "../components/Login";
import { TbAlertTriangle } from "react-icons/tb";

function Home(){
    return(
        <div>
            <Navbar />
            <Login/>
        </div>
    )
}

export default Home;