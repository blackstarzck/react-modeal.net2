import React from 'react';
import styles from "./HotIssue.module.css";
import classNames from "classnames/bind";
import Btn from "../Btn.jsx";

const HotIssueItems = [
    { id: 1, src: "/contents/promotion/item01.png" },
    { id: 2, src: "/contents/promotion/item02.png" },
    { id: 3, src: "/contents/promotion/item03.png" }
]

let cx = classNames.bind(styles);
function HotIssue() {
    let ContentsContainer = cx("cont", "hotissue");
    return (
        <div className={ContentsContainer}>
            <div className={styles.top}>
                <h3 className={styles.cont_title}>핫이슈</h3>
                <Btn/>
            </div>
            <ul className="wrapper">
                {HotIssueItems.map(item => {
                    return (
                        <li className={styles.item} key={item.id}>
                            <a href="">
                                <img src={item.src} alt="프로모션"/>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default HotIssue
