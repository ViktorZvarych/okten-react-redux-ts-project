import {FC} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import css from './Slider.module.css';
import './styles.css';
import {IMovie} from "../../interfaces";
import {urls} from "../../constants";

interface IProps {
    movies: IMovie[];
}

const Slider: FC<IProps> = ({movies}) => {

    return (
        <div className={css.Slider}>

            <Swiper
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
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
                    movies.map(({id, backdrop_path}) => (
                        <SwiperSlide key={id}>
                            <img src={urls.movies.backdrop(backdrop_path, 500)} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div>
    );
};

export {Slider};