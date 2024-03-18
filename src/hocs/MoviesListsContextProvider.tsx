import {createContext, FC, PropsWithChildren, useEffect, useState} from "react";

import {IMovie} from "../interfaces";
import {moviesService} from "../services";

interface IProps extends PropsWithChildren {
}

const MoviesListsContext =
    createContext<{
        topRatedMoviesList: IMovie[] | null;
        popularMoviesList: IMovie[] | null;
        upcomingMoviesList: IMovie[] | null;
        firstPageMoviesList: IMovie[] | null;
    } | null>(null);

const MoviesListsContextProvider: FC<IProps> = ({children}) => {
    const [topRatedMoviesList, setTopRatedMoviesList] = useState<IMovie[] | null>(null);

    const [popularMoviesList, setPopularMoviesList] = useState<IMovie[] | null>(null);

    const [upcomingMoviesList, setUpcomingMoviesList] = useState<IMovie[] | null>(null);

    const [firstPageMoviesList, setFirstPageMoviesList] = useState<IMovie[] | null>(null);

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getTopRatedList();
                setTopRatedMoviesList(data.results.slice(0, 8));
            })()
        } catch (e) {
            console.log(e);
        }
    }, [])

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getPopularList();
                setPopularMoviesList(data.results.slice(0, 8));
            })()
        } catch (e) {
            console.log(e);
        }
    }, [])

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getUpcomingList();
                setUpcomingMoviesList(data.results.slice(0, 8));
            })()
        } catch (e) {
            console.log(e);
        }
    }, [])

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getMovies('');
                setFirstPageMoviesList(data.results);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [])


    return (
        <MoviesListsContext.Provider value={{topRatedMoviesList, popularMoviesList, upcomingMoviesList, firstPageMoviesList}}>
            {children}
        </MoviesListsContext.Provider>
    );
};

export {MoviesListsContext, MoviesListsContextProvider}