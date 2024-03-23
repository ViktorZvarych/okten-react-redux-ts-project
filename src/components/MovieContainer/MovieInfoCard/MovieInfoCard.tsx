import {FC} from "react";

import css from './MovieInfoCard.module.css'
import {IMovieDetails} from "../../../interfaces";
import {PosterPreview} from "../PosterPreview";
import {StarsRating} from "../StarsRating";
import {urls} from "../../../constants";
import {CustomBadge} from "../../CustomBadge";

interface IProps {
    movieDetails: IMovieDetails
}

const MovieInfoCard: FC<IProps> = ({movieDetails}) => {
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
        backdrop_path
    } = movieDetails;

    return (
        <div>
            <article className={css.article}>
                <div className={css.card}>

                    <div className={css.titleContainer}>
                        <CustomBadge name={genres.map(({name}) => name).join(' ')}/>

                        <h2 className={css.cardTitle}>{title}</h2>
                    </div>

                    <img src={urls.movies.backdrop(backdrop_path, 500)} alt={title}/>

                    <PosterPreview imgUrl={poster_path}/>

                    <StarsRating stars={vote_average}/>

                    <p>Votes: {vote_count}</p>
                    <p>Release date: {release_date.toString()}</p>
                    <p>Budget: $ {budget}</p>
                    <p>Popularity: {popularity}</p>
                    <p>{overview}</p>
                </div>
            </article>
        </div>
    );
};

export {MovieInfoCard};