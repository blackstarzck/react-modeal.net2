import React from 'react';
import styles from "./SubRelease.module.css";

const ListItems = [
    { id: 1, alt: "즉시출고", src: "/Pro_sub_page/release/item01.png", path: "" },
    { id: 2, alt: "즉시출고", src: "/Pro_sub_page/release/item02.png", path: "" },
    { id: 3, alt: "즉시출고", src: "/Pro_sub_page/release/item03.png", path: "" },
    { id: 4, alt: "즉시출고", src: "/Pro_sub_page/release/item04.png", path: "" },
    { id: 5, alt: "즉시출고", src: "/Pro_sub_page/release/item05.png", path: "" },
]

function SubRelease() {
    return (
        <div className={styles.section}>
            <ul className={styles.item_wrapper}>
                {ListItems.map(item => {
                    return (
                        <li className={styles.item} key={item.id}>
                            <a className={styles.link} href="">
                                <img src={process.env.PUBLIC_URL + item.src} alt={item.alt}/>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SubRelease
