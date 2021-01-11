import React from 'react';
import styles from "./Tip.module.css";
import classNames from "classnames/bind";
import ContHeeader from '../ContHeader';

const TipItems = [
    { id: 1, src: "/contents/tip/item01.png" },
    { id: 2, src: "/contents/tip/item02.png" },
]

let cx = classNames.bind(styles);
function Tip() {
    let ContentsContainer = cx("cont", "tip");
    return (
        <div className={ContentsContainer}>
            <ContHeeader
                title=""
                bold=""
                desc="#모딜TIP"
                colorClassName=""
            />
            <ul className="wrapper">
                {TipItems.map(item => {
                    return (
                        <li className={styles.item} key={item.id}>
                            <a href="">
                                <img src={process.env.PUBLIC_URL + item.src} alt="프로모션"/>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Tip
