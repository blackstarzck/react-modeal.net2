import React from 'react';
import styles from "./Top.module.css";
import logo from "../../img/app_logo.png";

function Top() {
    return (
        <div className={styles.top}>
            <div className={styles.logo}>
                {/* <img src={logo} alt="로고"/> */}
                <img src={process.env.PUBLIC_URL + "/logo/app_logo.png"} alt="로고"/>
            </div>
        </div>
    )
}

export default Top
