import {FC, useEffect, useState} from "react";
import Badge from '@mui/material/Badge';

import css from './MovieInfoCard.module.css'
import {IMovieDetails, IVideosObject} from "../../../interfaces";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";
import {urls} from "../../../constants";
import {PopularList, TopRatedList, UpcomingList, Video} from "../../index";
import {moviesService} from "../../../services";

interface IProps {
    movie: IMovieDetails
}

const MovieInfoCard: FC<IProps> = ({movie}) => {
    console.log('render MovieInfoCard');

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
        backdrop_path,
        id
    } = movie;

    const [videoData, setVideoData] = useState<IVideosObject | null>(null);


    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getVideos(id);
                setVideoData(data);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [id])

    return (
        <div>
            <article className={css.article}>
                <div className={css.card}>
                    <div className={css.titleContainer}>
                        <Badge
                            badgeContent={genres.map(({name}) => name + '  ')}
                            color="error"
                            sx={{"& .MuiBadge-badge": {fontSize: 12, height: 36, minHeight: 15}}}>
                            <h3 className={css.cardTitle}>{title}</h3>
                        </Badge>
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

            <div>
                <h3>Trailers</h3>
                {videoData &&
                    videoData.results.filter(item => item.type === 'Trailer').slice(0, 2).map(item => <Video
                        key={item.id} video={item}/>)}
            </div>

            <TopRatedList/>
            <PopularList/>
            <UpcomingList/>
        </div>

    );
};

export {MovieInfoCard};