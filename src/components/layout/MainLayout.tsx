import { Outlet } from "react-router-dom";
import Navbar from "../../pages/SharedPage/Navbar/Navbar";
import Footer from "../../pages/SharedPage/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;