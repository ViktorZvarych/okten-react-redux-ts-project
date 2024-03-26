import {CSSProperties, FC} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Slider.css';
import {IMovie} from "../../interfaces";
import {useHandleNavigateToMovie, useScrollToTop} from "../../hooks";
import {MoviesListCard} from "../MovieContainer";

interface IProps {
    movies: IMovie[];
}

const Slider: FC<IProps> = ({movies}) => {
    const {scrollToTopHandler} = useScrollToTop();
    const navigateToMovie = useHandleNavigateToMovie();

    const handleNavigateAndScrollToTop = (id:number) => {
        scrollToTopHandler();
        navigateToMovie(id);
    }

    return (
        <div className="Slider">

            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as CSSProperties}
                autoplay={{
                    delay: 2700,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                spaceBetween={20}
                navigation={true}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySliper"
            >

                {
                    movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div onClick={() => handleNavigateAndScrollToTop(movie.id)}>
                                <MoviesListCard movie={movie} width={300}/>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
};

export {Slider};