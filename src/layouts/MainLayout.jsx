import { Outlet } from "react-router-dom";
import Navbar from "../compoments/Navbar";
import Footer from "../compoments/Footer";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="min-h-screen">
            <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;