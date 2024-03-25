import {FC, useEffect, useState} from "react";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {watchMoviesActions} from "../../../store";

import css from './EditWatchListButton.module.css';

interface IProps {
    movieId: number;
}

const EditWatchListButton: FC<IProps> = ({movieId}) => {
    const {watchMovies} = useAppSelector(state => state.watchMovies);
    const dispatch = useAppDispatch();

    const [movieIsInWatchList, setMovieIsInWatchList] = useState<boolean | null>(null);

    useEffect(() => {
        const isInWatchList = watchMovies.some(movie => movie.id === movieId);
        setMovieIsInWatchList(isInWatchList);
    }, [movieId, watchMovies]);

    const editWatchListHandler = async () => {
        await dispatch(watchMoviesActions.postWatchMovie({
            media_id: movieId,
            media_type: 'movie',
            watchlist: !movieIsInWatchList
        }));
        await dispatch(watchMoviesActions.getWatchMoviesList());
    }

    useEffect(() => {
        console.log(watchMovies, movieIsInWatchList)
    }, [watchMovies, movieIsInWatchList]);

    return (
        <button className={css.EditWatchListButton} onClick={editWatchListHandler}>
            {
                movieIsInWatchList !== null &&
                <p>
                    {
                        movieIsInWatchList ? 'Remove' : 'Add'
                    }
                </p>
            }
        </button>
    );
};

export {EditWatchListButton};