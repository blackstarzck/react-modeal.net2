import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';

function SwiperCont({ slides, options }) {
    const array = options;
    const option = array[0];
    return (
        <Swiper
            wrapperTag={option.wrapperTag} 
            speed={option.speed}
            autoplay={option.autoplay}
            loop={option.loop}
            spaceBetween={option.spaceBetween}
            slidesPerView={option.slidesPerView}
            >
            {slides.map(item => {
                return (
                    <SwiperSlide key={item.id}>
                        <a href="">
                            <img src={item.src} alt="사진"/>
                        </a>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default SwiperCont
