import React from 'react';
import styles from "./BannerBottom.module.css";

function BannerSub() {
    return (
        <div className={styles.bottom_banner}>
            <a href="">
                <img src={process.env.PUBLIC_URL + "/banner/bottom/item01.png"} alt="banner"/>
            </a>
        </div>
    )
}

export default BannerSub
