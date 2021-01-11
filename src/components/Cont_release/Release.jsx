import React from 'react';
import styles from "./Release.module.css";
import classNames from "classnames/bind"
import ContHeader from "../ContHeader.jsx";
import ListTypeA from "../ListTypeA.jsx";

const ListItem = [
    { id: 1, src: "/contents/release/item01.png", alt: "즉시출고", title: "GV80 최대 1,500만원 할인!", sub: "다시 없을 할인! 11~19%할인" },
    { id: 2, src: "/contents/release/item02.jpg", alt: "즉시출고", title: "빠른출고는 모딜 바로검색!", sub: "즉시출고 리스트 매일 업데이트" },
    { id: 3, src: "/contents/release/item03.png", alt: "즉시출고", title: "벤츠 E-class 할인+즉시출고", sub: "상담시 스타벅스 커피 증정" },
    { id: 4, src: "/contents/release/item04.png", alt: "즉시출고", title: "쏘렌토 파격 특가로 즉시출고", sub: "개소세1.5%유지,289만원 할인!" }
]

let cx = classNames.bind(styles);
function Release() {
    let ContentsContainer = cx("cont", "release");
    return (
        <div className={ContentsContainer}>
            <ContHeader
                title="즉시출고"
                desc="가능한 차량 확인하세요!"
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

export default Release
