import {Outlet} from "react-router-dom";

const MoviesPage = () => {

    return (
        <div style={{minHeight: '95vh'}}>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};