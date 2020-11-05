import React from 'react';
import styles from "./Slides.module.css";
import classNames from "classnames/bind"
import ContHeader from "../ContHeader.jsx";
import SwiperCont from "../SwiperCont.jsx";

const SwiperSlides = [
    { id: 1, src: "/contents/slide01/item01.png" },
    { id: 2, src: "/contents/slide01/item01.png" },
    { id: 3, src: "/contents/slide01/item01.png" },
    { id: 4, src: "/contents/slide01/item01.png" },
    { id: 5, src: "/contents/slide01/item01.png" },
    { id: 6, src: "/contents/slide01/item01.png" },
]
const SwiperControll = [
    { 
        wrapperTag: "ul", 
        loop: true, 
        spaceBetween: 30,  
        slidesPerView: 1, 
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        speed: 500
    }
]
let cx = classNames.bind(styles);
function FirstSlides() {
    let contentContainer = cx('cont', 'first_banner');
    return (
        <div className={contentContainer}>
            <ContHeader 
                title="내 인생 첫 차라면?"
                bold="장기렌트!"
                desc=""
                colorClassName="first"
            />
            <SwiperCont 
                slides={ SwiperSlides } 
                options={ SwiperControll }
            />
        </div>
    )
}

export default FirstSlides
