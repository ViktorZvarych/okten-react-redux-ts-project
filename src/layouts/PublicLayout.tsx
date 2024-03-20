import {Navigate, Outlet} from "react-router-dom";
import {authService} from "../services";

const PublicLayout = () => {
    const token = authService.getToken();

    if (token) {
        return <Navigate to={'movies'}/>
    }

    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {PublicLayout};