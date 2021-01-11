import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import classNames from "classnames/bind";
import styles from './Review.module.css';
import ContHeader from "../ContHeader.jsx";

const ReviewItems = [
    { id: 1, info: "차량", src: '/contents/review/item01.png' },
    { id: 2, info: "차량", src: '/contents/review/item02.png' },
    { id: 3, info: "차량", src: '/contents/review/item03.png' },
    { id: 4, info: "차량", src: '/contents/review/item04.png' },
    { id: 5, info: "차량", src: '/contents/review/item05.png' },
    { id: 6, info: "더보기", src: '/contents/review/more.png' },
];

let cx = classNames.bind(styles);
function Review() {
    let ContentsContainer = cx("cont", "review");
    return (
        <div className={ContentsContainer}>
            <div className={styles.message}>
                <p>모딜의<br/><b>모든 정보</b> 확인하셨나요?</p>
            </div>
            <ContHeader 
                title=""
                bold=""
                desc="#출고후기"
                colorClassName=""
                display="none"
            />
            <Swiper
                id='item'
                wrapperTag='ul'
                spaceBetween={30}
                slidesPerView={2.2}
                freeMode= {true}
            >
                {ReviewItems.map(item => {
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

export default Review
