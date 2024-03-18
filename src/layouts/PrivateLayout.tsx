import {Outlet} from "react-router-dom";

const PrivateLayout = () => {
    console.log('render PrivateLayout');

    return (
        <div>
            {/*<h2>PrivateLayout</h2>*/}
            <Outlet/>
        </div>
    );
};

export {PrivateLayout};