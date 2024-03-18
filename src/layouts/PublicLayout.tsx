import {Navigate, Outlet} from "react-router-dom";
import {authService} from "../services";

const PublicLayout = () => {
    console.log('render PublicLayout');

    const token = authService.getToken();

    if (token) {
        return <Navigate to={'movies'}/>
    }

    return (
        <div>
            {/*<h2>PublicLayout</h2>*/}
            <Outlet/>
        </div>
    );
};

export {PublicLayout};