import {CSSProperties, FC} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';
import {IMovie} from "../../interfaces";
import {urls} from "../../constants";
import {useHandleNavigateToMovie, useScrollToTop} from "../../hooks";

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
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                // navigation={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    movies.map(({id, backdrop_path, title}) => (
                        <SwiperSlide key={id}>
                            <div onClick={() => handleNavigateAndScrollToTop(id)}>
                                <img src={urls.movies.backdrop(backdrop_path, 500)} alt={title}/>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
};

export {Slider};