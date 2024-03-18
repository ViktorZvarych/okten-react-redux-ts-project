import {Navigate} from "react-router-dom";
import {FC, PropsWithChildren} from "react";

import {authService} from "../services";

interface IProps extends PropsWithChildren {

}

const AuthProvider: FC<IProps> = ({children}) => {
    const token: string|null = authService.getToken();

    if (token) {
        return <>{children}</>
    }

    return <Navigate to={'login'}/>
}

export {AuthProvider}