import React, {FC, useEffect, useState} from "react";
import {Tooltip} from "@mui/material";

import css from './EditWatchListButton.module.css';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {watchMoviesActions} from "../../../store";

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

    const editWatchListHandler: React.MouseEventHandler<SVGSVGElement> = async (e) => {
        e.stopPropagation();
        await dispatch(watchMoviesActions.postWatchMovie({
            media_id: movieId,
            media_type: 'movie',
            watchlist: !movieIsInWatchList
        }));
        await dispatch(watchMoviesActions.getWatchMoviesList());
    }

    return (
        <span className={css.EditWatchListButton} >
            {
                movieIsInWatchList !== null &&

                <Tooltip title={movieIsInWatchList ? 'Remove from watch list' : 'Add to watch list'} placement="top-end">
                    <svg
                        onClick={editWatchListHandler} className={movieIsInWatchList ? css.active : ''}
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z">

                        </path>
                    </svg>
                </Tooltip>


            }
        </span>
    );
};

export {EditWatchListButton};