import {useEffect, useState} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import css from './HeroBanner.module.css';
import './styles.css';
import {urls} from "../../constants";
import {useAppDispatch, useAppSelector, useHandleNavigateToMovie, useScrollToTop} from "../../hooks";
import {topRatedMoviesActions} from "../../store";


const HeroBanner = () => {
    const {topRatedMovies: {results: topRatedMovies}} = useAppSelector(state => state.topRatedMovies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(topRatedMoviesActions.getTopRatedMovies())
    }, [dispatch]);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // <typeof Swiper | null >
    const {scrollToTopHandler} = useScrollToTop();
    const navigateToMovie = useHandleNavigateToMovie();

    const handleNavigateAndScrollToTop = (id: number) => {
        scrollToTopHandler();
        navigateToMovie(id);
    }

    return (
        <div className="HeroBanner">
            <hr/>

            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}

                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >
                {
                    topRatedMovies.map(({id, backdrop_path, title}) => (
                        <SwiperSlide key={id}>
                            <div onClick={() => handleNavigateAndScrollToTop(id)}>
                                <img src={urls.movies.backdrop(backdrop_path, 500)} alt={title}/>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                grabCursor={true}
                spaceBetween={20}
                slidesPerView={"auto"}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    topRatedMovies.map(({id, backdrop_path, title}) => (
                        <SwiperSlide key={id}>
                            <img src={urls.movies.backdrop(backdrop_path, 300)} alt={title}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <hr/>

        </div>
    );
};

export {HeroBanner};