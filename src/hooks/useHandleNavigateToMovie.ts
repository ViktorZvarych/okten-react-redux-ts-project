import {useNavigate} from "react-router-dom";

export const useHandleNavigateToMovie = () => {
    const navigate = useNavigate();

    return (id: number) => {
        navigate(`../info/${id}`);
    };
}