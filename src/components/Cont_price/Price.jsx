import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import classNames from "classnames/bind";
import styles from './Price.module.css';


const PriceItems = [
    { id: 1, info: "10만원대", src: '/contents/price/item01.png' },
    { id: 2, info: "20만원대", src: '/contents/price/item02.png' },
    { id: 3, info: "30만원대", src: '/contents/price/item03.png' },
    { id: 4, info: "50만원대", src: '/contents/price/item04.png' },
    { id: 5, info: "70만원대", src: '/contents/price/item05.png' },
    { id: 6, info: "더보기", src: '/contents/price/more.png' },
];

let cx = classNames.bind(styles);
function Price() {
    let ContentsContainer = cx("cont", "price");
    return (
        <div className={ContentsContainer}>
            <h3 className={styles.cont_title}>가격대</h3>
            <Swiper
                id='item'
                wrapperTag='ul'
                spaceBetween={30}
                slidesPerView={2.4}
                freeMode= {true}
            >
                {PriceItems.map(item => {
                    return (
                        <SwiperSlide key={item.id} tag='li'>
                            <a href="">
                                <img
                                    src={process.env.PUBLIC_URL + item.src}
                                    alt={item.info}
                                />
                            </a>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Price
