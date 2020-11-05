import React from 'react';
import styles from "./ListTypeA.module.css";

function ListTypeA({ numb, title, src, sub, alt }) {
    return (
        <li className={styles.item} key={numb}>
            <a href="">
                <img src={src} alt={alt}/>
                <span className={styles.title}>{title}</span>
                <span className={styles.sub_title}>{sub}</span>
            </a>
        </li>
    )
}

export default ListTypeA
