import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import FooterPage from "../pages/Shared/FooterPage";

const MainLayout = () => {
    return (
        <div className="bg-blue-500 dark:bg-blue-600">
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <FooterPage></FooterPage>
        </div>
        </div>
    );
};

export default MainLayout