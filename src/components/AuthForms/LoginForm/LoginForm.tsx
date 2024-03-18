import {useNavigate} from "react-router-dom";

import css from './LoginForm.module.css';
import bgImage from '../../../bg-image.webp';
import {authService} from "../../../services";
import {token} from "../../../constants";

const LoginForm = () => {
    console.log('render LoginForm');

    const navigate = useNavigate();

    const clickHandler = () => {
        authService.setToken(token);
        navigate('/movies');
    }

    return (
        <div className={css.loginForm} style={{backgroundImage: `url(${bgImage})`}} >
            {/*<h2>LoginForm</h2>*/}

                <div className={css.box}>
                    <div>
                        <i className="icon fas fa-user-shield"></i>
                        <h3 className={css.title}>Are You Ready?</h3>
                    </div>
                    <button onClick={clickHandler}>Login</button>
                </div>


        </div>
    );
};

export {LoginForm};