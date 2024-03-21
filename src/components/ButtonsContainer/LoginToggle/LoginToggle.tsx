import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import {useHandleLogInOut} from "../../../hooks";
import {useEffect} from "react";

const LoginToggle = () => {
    const {localToken, auth,setAuth, handleChangeLogin} = useHandleLogInOut();

    useEffect(() => {
        setAuth(!!localToken);
    }, [localToken, setAuth]);
    
    return (
        <div>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={auth}
                            onChange={handleChangeLogin}
                            aria-label="login switch"
                            color='error'
                        />
                    }
                    label={auth ? 'Logout' : 'Login'}
                />
            </FormGroup>
        </div>

    );
};

export {LoginToggle};