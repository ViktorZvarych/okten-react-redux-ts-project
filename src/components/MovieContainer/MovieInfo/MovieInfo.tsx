import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {MovieInfoCard} from "../MovieInfoCard";
import {Videos} from "../Videos";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {selectedMovieActions} from "../../../store/slices/selectedMovieSlice.ts";

const MovieInfo = () => {
    const {id} = useParams();

    const {selectedMovie: movie} = useAppSelector(state => state.selectedMovie);

    const dispatch = useAppDispatch();

    useEffect(() => {
        id && dispatch(selectedMovieActions.getSelectedMovie(+id))
    }, [dispatch, id]);

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