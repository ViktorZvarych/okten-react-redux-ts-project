import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {IMovieDetails} from "../../../interfaces";
import {moviesService} from "../../../services";
import {MovieInfoCard} from "../MovieInfoCard/MovieInfoCard";

const MovieInfo = () => {
    console.log('render MovieInfoCard');

    const {id} = useParams();
    console.log(id);

    const [movie, setMovie] = useState<IMovieDetails | null>(null);

    useEffect(() => {
        try {
            (async () => {
                if (id) {
                    const {data} = await moviesService.getMovieDetailsById(+id);
                    setMovie(data);
                }
            })()
        } catch (e) {
            console.log(e);
        }
    }, [id]);

    return (
        <div>
            {/*<h2>MovieInfo</h2>*/}
            {
                movie
                &&
                <MovieInfoCard movie={movie}/>
            }
        </div>
    );
};

export {MovieInfo};