import React from 'react';
import styles from "./SubStory.module.css";

const ListItems = [
    { id: 1, alt: "story", src: "/Mag_sub_page/story/item01.png", path: "" },
    { id: 2, alt: "story", src: "/Mag_sub_page/story/item02.png", path: "" },
    { id: 3, alt: "story", src: "/Mag_sub_page/story/item03.png", path: "" },
    { id: 4, alt: "story", src: "/Mag_sub_page/story/item04.png", path: "" },
    { id: 5, alt: "story", src: "/Mag_sub_page/story/item05.png", path: "" },
    { id: 6, alt: "story", src: "/Mag_sub_page/story/item06.png", path: "" },
    { id: 7, alt: "story", src: "/Mag_sub_page/story/item07.png", path: "" },
    { id: 8, alt: "story", src: "/Mag_sub_page/story/item08.png", path: "" },
    { id: 9, alt: "story", src: "/Mag_sub_page/story/item09.png", path: "" },
    { id: 10, alt: "story", src: "/Mag_sub_page/story/item10.png", path: "" },
]

function SubStory() {
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

export default SubStory
