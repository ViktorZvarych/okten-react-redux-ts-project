import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {MoviesList} from "../../components";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {allMoviesActions} from "../../store";

const MoviesListPage = () => {
    console.log('render MoviesListPage');

    const [urlSearchParams,] = useSearchParams();
    const [params, setParams] = useState<string>('');

    const {allMovies: {results: movies}} = useAppSelector(state => state.allMovies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(allMoviesActions.getAllMovies({params}))
    }, [dispatch, params]);

    useEffect(() => {
        const urlParams = [];

        for (const [key, value] of urlSearchParams.entries()) {
            urlParams.push(`${key}=${value}`);
        }

        setParams(urlParams.join('&'));
    }, [urlSearchParams])


    return (
        <div>
            {/*<h2>MoviesListPage</h2>*/}

            {movies &&
                <div>
                    <MoviesList movies={movies}/>
                </div>
            }

        </div>
    );
};

export {MoviesListPage};