import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {IMovieDetails} from "../../../interfaces";
import {moviesService} from "../../../services";
import {MovieInfoCard} from "../MovieInfoCard";
import {Videos} from "../Videos";

const MovieInfo = () => {
    const {id} = useParams();

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
            {
                movie
                &&
                <div>
                    <MovieInfoCard movieDetails={movie}/>
                    <Videos id={movie.id}/>
                </div>
            }
        </div>
    );
};

export {MovieInfo};