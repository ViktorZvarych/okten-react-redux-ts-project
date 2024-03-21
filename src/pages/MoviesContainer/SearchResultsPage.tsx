import {MoviesList} from "../../components";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";

const SearchResultsPage = () => {
    const [movies, setMovies] = useState<IMovie[] | null>(null);

    const [urlSearchParams, ] = useSearchParams();

    useEffect(() => {
        const urlParams = [];

        for (const [key, value] of urlSearchParams.entries()) {
            urlParams.push(`${key}=${value}`);
        }

        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.searchMovie(urlParams.join('&'));
                setMovies(data.results);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [urlSearchParams])


    return (
        <div>
            {movies && <MoviesList movies={movies}/>}
        </div>
    );
};

export {SearchResultsPage};