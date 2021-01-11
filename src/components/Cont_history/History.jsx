import React from 'react';
import styles from "./History.module.css";
import classNames from "classnames/bind"


let cx = classNames.bind(styles);
function History() {
    let item01 = cx('item', 'i1');
    let item02 = cx('item', 'i2');
    return (
        <div className={styles.history_container}>
            <div className={styles.history}>
                <div className={item01}>
                    <div className={styles.icon}></div>
                    <h4>누적 거래액</h4>
                    <p>19.05 ~ 20.08</p>
                </div>
                <div className={item02}>
                    <h4>차량 거래</h4>
                    <p>
                        <span className={styles.data}>5,487</span>대
                    </p>
                </div>
                <div className={item02}>
                    <h4>누적 거래</h4>
                    <p>
                        <span className={styles.data}>2,189</span>억
                    </p>
                </div>
            </div>
            <div className={styles.banner}>
                <a href="">
                    <img src={process.env.PUBLIC_URL + "/banner-main-top3.png"} alt="banner"/>
                </a>
            </div>
        </div>
    )
}

export default History
