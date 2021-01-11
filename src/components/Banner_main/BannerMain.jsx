import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import "./BannerMain.css";
SwiperCore.use([ Pagination, Autoplay ]);


const BannerItems = [
    { id: 1, src: "/banner/main/item01.png" },
    { id: 2, src: "/banner/main/item02.png" },
    { id: 3, src: "/banner/main/item03.png" },
    { id: 4, src: "/banner/main/item04.png" },
    { id: 5, src: "/banner/main/item05.png" }
]

function BannerMain() {
    return (
        <div className="main_banner">
            <Swiper
                wrapperTag='ul' 
                speed={2000}
                autoplay={{delay: 2000, disableOnInteraction: false}}
                pagination={{clickable: true}}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                >
                {BannerItems.map(item => {
                    return (
                        <SwiperSlide key={item.id} tag="li">
                            <a href="">
                                <img src={process.env.PUBLIC_URL + item.src} alt="banner"/>
                            </a>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default BannerMain
