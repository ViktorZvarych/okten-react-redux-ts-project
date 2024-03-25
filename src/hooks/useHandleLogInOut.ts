import {authService} from "../services";
import {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "./reduxHooks.ts";

const useHandleLogInOut = () => {
    const {token} = useAppSelector(state => state.userInfo);

    const navigate = useNavigate();

    const localToken = authService.getToken();

    const [auth, setAuth] = useState<boolean>(!!localToken);

    const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;

        setAuth(isChecked);

        if (isChecked) {
            authService.setToken(token);
            navigate('/movies');
        } else {
            authService.removeToken();
            navigate('/login');
        }
    };

    return {localToken, auth, setAuth, handleChangeLogin}
}

export {useHandleLogInOut}