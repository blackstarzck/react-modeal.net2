import React from 'react';
import styles from "./SubHotIssue.module.css";

const ListItems = [
    { id: 1, alt: "핫이슈", src: "/Pro_sub_page/hotissue/item01.png", path: "" },
    { id: 2, alt: "핫이슈", src: "/Pro_sub_page/hotissue/item02.png", path: "" },
    { id: 3, alt: "핫이슈", src: "/Pro_sub_page/hotissue/item03.png", path: "" },
    { id: 4, alt: "핫이슈", src: "/Pro_sub_page/hotissue/item04.png", path: "" },
    { id: 5, alt: "핫이슈", src: "/Pro_sub_page/hotissue/item05.png", path: "" },
    { id: 6, alt: "핫이슈", src: "/Pro_sub_page/hotissue/item06.png", path: "" },
]

function SubHotIssue() {
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

export default SubHotIssue
