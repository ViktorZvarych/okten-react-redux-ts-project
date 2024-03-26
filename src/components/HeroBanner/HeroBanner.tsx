import {CSSProperties, useEffect, useState} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './HeroBanner.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {topRatedMoviesActions} from "../../store";
import {urls} from "../../constants";
import {MoviesListCard, PopularList, UpcomingList} from "../MovieContainer";

const HeroBanner = () => {
    const {topRatedMovies: {results: topRatedMovies}} = useAppSelector(state => state.topRatedMovies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(topRatedMoviesActions.getTopRatedMovies())
    }, [dispatch]);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);


    return (
        <div className="HeroBanner">
            <hr/>

            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as CSSProperties}


                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >
                {
                    topRatedMovies.slice(0, 8).map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div className='main-swiper-container'>
                                <MoviesListCard movie={movie} width={500}/>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <hr/>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                grabCursor={true}
                spaceBetween={20}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="myHeroSwiper"
            >
                {
                    topRatedMovies.slice(0, 8).map(({id, backdrop_path, title}) => (
                        <SwiperSlide key={id}>
                            <img src={urls.movies.backdrop(backdrop_path, 300)} alt={title}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <PopularList/>

            <UpcomingList/>

        </div>
    );
};

export {HeroBanner};