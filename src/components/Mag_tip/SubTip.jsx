import React from 'react';
import styles from "./SubTip.module.css";

const ListItems = [
    { id: 1, alt: "TIP", src: "/Mag_sub_page/tip/item01.png", path: "" },
    { id: 2, alt: "TIP", src: "/Mag_sub_page/tip/item02.png", path: "" },
    { id: 3, alt: "TIP", src: "/Mag_sub_page/tip/item03.png", path: "" },
    { id: 4, alt: "TIP", src: "/Mag_sub_page/tip/item04.png", path: "" },
    { id: 5, alt: "TIP", src: "/Mag_sub_page/tip/item05.png", path: "" },
    { id: 6, alt: "TIP", src: "/Mag_sub_page/tip/item06.png", path: "" },
    { id: 7, alt: "TIP", src: "/Mag_sub_page/tip/item07.png", path: "" },
]

function SubTip() {
    return (
        <div className={styles.section}>
            <ul className={styles.item_wrapper}>
                {ListItems.map(item => {
                    return (
                        <li className={styles.item} key={item.id}>
                            <a className={styles.link} href="">
                                <img src={item.src} alt={item.alt}/>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SubTip
