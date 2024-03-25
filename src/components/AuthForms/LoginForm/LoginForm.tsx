import {useNavigate} from "react-router-dom";

import css from './LoginForm.module.css';
import bgImage from '../../../assets/bg-image.webp';
import {authService} from "../../../services";
import {useAppSelector} from "../../../hooks";

const LoginForm = () => {
    const navigate = useNavigate();

    const {token} = useAppSelector(state => state.userInfo);

    const handleLogin = () => {
        authService.setToken(token);
        navigate('/movies');
    }

    return (
        <div className={css.loginForm} style={{backgroundImage: `url(${bgImage})`}} >

                <div className={css.box}>
                    <div>
                        <i className="icon fas fa-user-shield"></i>
                        <h3 className={css.title}>Are You Ready?</h3>
                    </div>
                    <button onClick={handleLogin}>Login</button>
                </div>

        </div>
    );
};

export {LoginForm};