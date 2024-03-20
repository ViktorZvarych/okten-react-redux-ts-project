import {useEffect} from "react";

import {MoviesList, TopBar} from "../../../components";
import {useAppDispatch, useAppSelector, useGetMovieParams} from "../../../hooks";
import {allMoviesActions} from "../../../store";

const MoviesListPage = () => {

    const params = useGetMovieParams();

    const {allMovies: {results: movies}} = useAppSelector(state => state.allMovies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(allMoviesActions.getAllMovies({params}))
    }, [dispatch, params]);

    return (
        <div>
            {movies &&
                <div>
                    <TopBar/>

                    <h3>All movies</h3>
                    <MoviesList movies={movies}/>
                </div>
            }
        </div>
    );
};

export {MoviesListPage};