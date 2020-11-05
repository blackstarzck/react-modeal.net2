import React from 'react';
import styles from "./Top.module.css";

function Top() {
    return (
        <div className={styles.top}>
            <div className={styles.logo}>
                <img src="/app_logo.png" alt="로고"/>
            </div>
        </div>
    )
}

export default Top
