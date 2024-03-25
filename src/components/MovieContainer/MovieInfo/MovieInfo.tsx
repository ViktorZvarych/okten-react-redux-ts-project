import {useParams} from "react-router-dom";

import {MovieInfoCard} from "../MovieInfoCard";
import {Videos} from "../Videos";

const MovieInfo = () => {
    const {id} = useParams();

    return (
        <div>
            {
                id
                &&
                <div>
                    <MovieInfoCard id={+id}/>
                    <Videos id={+id}/>
                </div>
            }
        </div>
    );
};

export {MovieInfo};