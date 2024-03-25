import {FC, useEffect} from "react";

import css from './MovieInfoCard.module.css'
import {PosterPreview} from "../PosterPreview";
import {StarsRating} from "../StarsRating";
import {urls} from "../../../constants";
import {CustomBadge} from "../../CustomBadge";
import {useAppDispatch, useAppSelector, useScrollToTop} from "../../../hooks";
import {selectedMovieActions} from "../../../store";
import {EditWatchListButton} from "../../WatchListContainer";

interface IProps {
    id: number
}

const MovieInfoCard: FC<IProps> = ({id}) => {
    const {selectedMovie} = useAppSelector(state => state.selectedMovie);

    const dispatch = useAppDispatch();

    useEffect(() => {
        id && dispatch(selectedMovieActions.getSelectedMovie(+id))
    }, [dispatch, id]);

    const {
        title,
        genres,
        vote_count,
        release_date,
        overview,
        vote_average,
        poster_path,
        budget,
        popularity,
        // backdrop_path
    } = selectedMovie;

    const {scrollToTopHandler} = useScrollToTop();

    useEffect(() => {
        scrollToTopHandler()
    }, [id]);

    return (
        <div>
            {
                selectedMovie &&
                <article className={css.article}>
                    <div className={css.card}>

                        <div className={css.titleContainer}>
                            <CustomBadge name={genres.map(({name}) => name).join(' ')}/>

                            <h2 className={css.cardTitle}>{title}</h2>

                            <EditWatchListButton movieId={id}/>
                        </div>

                        <img src={urls.movies.poster(poster_path, 300)} alt={title}/>

                        <PosterPreview imgUrl={poster_path}/>

                        <StarsRating stars={vote_average}/>

                        <p>Votes: {vote_count}</p>

                        {release_date && <p>Release date: {release_date.toString()}</p>}

                        <p>Budget: $ {budget}</p>
                        <p>Popularity: {popularity}</p>
                        <p>{overview}</p>
                    </div>
                </article>
            }

        </div>
    );
};

export {MovieInfoCard};