import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header/Header";


const MainLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;