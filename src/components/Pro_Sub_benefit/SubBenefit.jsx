import React from 'react';
import styles from './SubBenefit.module.css';

const ListItems = [
    { id: 1, alt: "benefit", src: "/Pro_sub_page/benefit/item01.png", path: "" },
    { id: 2, alt: "benefit", src: "/Pro_sub_page/benefit/item02.png", path: "" },
    { id: 3, alt: "benefit", src: "/Pro_sub_page/benefit/item03.png", path: "" },
    { id: 4, alt: "benefit", src: "/Pro_sub_page/benefit/item04.png", path: "" },
    { id: 5, alt: "benefit", src: "/Pro_sub_page/benefit/item05.png", path: "" },
    { id: 6, alt: "benefit", src: "/Pro_sub_page/benefit/item06.png", path: "" },
    { id: 7, alt: "benefit", src: "/Pro_sub_page/benefit/item07.png", path: "" },
    { id: 8, alt: "benefit", src: "/Pro_sub_page/benefit/item08.png", path: "" },
    { id: 9, alt: "benefit", src: "/Pro_sub_page/benefit/item09.png", path: "" },
]

function SubBenefit() {
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

export default SubBenefit
