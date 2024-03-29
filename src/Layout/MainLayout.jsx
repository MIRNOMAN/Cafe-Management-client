import Footer from "../Share/Footer/Footer"
import Navbar from "../Share/Navbar/Navbar"
import { Outlet } from "react-router-dom"


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout