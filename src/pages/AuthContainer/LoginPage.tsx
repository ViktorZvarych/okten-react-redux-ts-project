import {Outlet} from "react-router-dom";

const LoginPage = () => {
    console.log('render LoginPage');

    return (
        <div>
            {/*<h2>LoginPage</h2>*/}
            <Outlet/>
        </div>
    );
};

export {LoginPage};