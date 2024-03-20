import {useEffect} from "react";

import css from './MoviesListPage.module.css'
import {GenresList, MoviesList, SearchInput, SortInput} from "../../../components";
import {useAppDispatch, useAppSelector, useGetMovieParams} from "../../../hooks";
import {allMoviesActions} from "../../../store";

const MoviesListPage = () => {

    const params = useGetMovieParams();

    const {allMovies: {results: movies}} = useAppSelector(state => state.allMovies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(allMoviesActions.getAllMovies({params}))
    }, [params]);

    return (
        <div>
            {movies &&
                <div>
                    <div className={css.bar}>
                        <GenresList/>
                        <SearchInput/>
                        <SortInput/>
                    </div>
                    <h3>All movies</h3>
                    <MoviesList movies={movies}/>
                </div>
            }
        </div>
    );
};

export {MoviesListPage};