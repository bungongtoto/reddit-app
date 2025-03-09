import { Outlet } from "react-router";
import Header from "../components/Header";

function AppLayout()  {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default AppLayout;