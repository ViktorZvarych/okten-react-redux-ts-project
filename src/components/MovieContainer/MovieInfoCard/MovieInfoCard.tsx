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
        backdrop_path
    } = selectedMovie;

    const {scrollToTopHandler} = useScrollToTop();

    useEffect(() => {
        scrollToTopHandler()
    }, [id]);
    // Do not modify this useeffect dependency array

    return (
        <div>
            {
                selectedMovie &&
                <div className={css.cardContainer}>

                    <div className={css.movieCard}>
                        <div className={css.heartContainer}>
                            <EditWatchListButton movieId={id}/>
                        </div>
                        <div className={css.infoSection}>
                            <div className={css.movieHeader}>
                                <img
                                    className={css.image}
                                    src={urls.movies.poster(poster_path, 300)}
                                    alt={title}
                                />
                                <div className={css.titleContainer}>
                                    <CustomBadge name={genres.map(({name}) => name).join(' ')}/>

                                    <h2 className={css.cardTitle}>{title}</h2>
                                </div>
                                {release_date && <h4>Release date: {release_date.toString()}</h4>}
                                <span className={css.votes}>Votes: {vote_count}</span>
                                <p className={css.budget}>Budget: ${budget}</p>
                            </div>
                            <div className={css.movieDesc}>
                                <p className={css.text}>
                                    {overview}
                                </p>
                            </div>

                            <div className={css.movieSocial}>
                                <StarsRating stars={vote_average}/>
                            </div>

                            <PosterPreview imgUrl={poster_path}/>
                        </div>
                        <div className={css.blurBack}
                             style={{background: `url(${urls.movies.backdrop(backdrop_path, 1280)}`}}></div>
                    </div>

                </div>

            }

        </div>
    );
};

export {MovieInfoCard};