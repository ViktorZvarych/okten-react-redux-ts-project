import {useEffect} from "react";

import css from './MoviesListPage.module.css'
import {MoviesList, Slider, TopBar} from "../../../components";
import {useAppDispatch, useAppSelector, useGetMovieParams} from "../../../hooks";
import {allMoviesActions} from "../../../store";

const MoviesListPage = () => {

    const params: string = useGetMovieParams();

    const {allMovies: {results: movies}} = useAppSelector(state => state.allMovies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(allMoviesActions.getAllMovies({params}))
    }, [dispatch, params]);

    return (
        <div className={css.moviesListPage}>
            {movies &&
                <div>
                    <TopBar/>
                    <Slider movies={movies
                        .slice(0,8)}/>
                    <MoviesList movies={movies}/>
                </div>
            }
        </div>
    );
};

export {MoviesListPage};