import React from 'react';
import styles from "./Benefit.module.css";
import classNames from "classnames/bind"
import ContHeader from "../ContHeader.jsx";
import ListTypeA from "../ListTypeA.jsx";

const ListItem = [
    { id: 1, src: "/contents/benefit/item01.png", alt: "혜택", title: "현대&제네시스 전시차량 모음전", sub: "대박할인! 가장 합리적인 소비!" },
    { id: 2, src: "/contents/benefit/item02.png", alt: "혜택", title: "에스컬레이드, 30%할인", sub: "압도적 스케일, SUV의 제왕!" },
    { id: 3, src: "/contents/benefit/item03.png", alt: "혜택", title: "G90 최대 3,000만원 할인!", sub: "중형차 한 대 만큼 할인받자!!" },
    { id: 4, src: "/contents/benefit/item04.png", alt: "혜택", title: "국내최저가! 리스/렌트 특가", sub: "카니발외 3종, 지금 확인!" }
]

let cx = classNames.bind(styles);
function Benefit() {
    let ContentsContainer = cx("cont", "benefit");
    return (
        <div className={ContentsContainer}>
            <ContHeader
                title="모두가딜러 혜택"
                desc=""
            />
            <ul className={styles.wrapper}>
                {ListItem.map(item => {
                    return (
                        <ListTypeA
                            key={item.id}
                            numb={item.id}
                            src={process.env.PUBLIC_URL + item.src}
                            alt={item.alt}
                            title={item.title} 
                            sub={item.sub}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default Benefit
