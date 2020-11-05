import React from 'react';
import styles from "./Service.module.css";

const ServiceHead = () => {
    return (
        <div className={styles.head}>
            <p className={styles.title}>궁금하신게 있으신가요?</p>
            <p className={styles.strong}>
                편하게 모두가딜러<br/>
                카카오톡 채널 채팅으로<br/>
                문의해 주세요 :&#41;<br/>
            </p>
            <div className={styles.img}>
                <img src="/ch_icon.png" alt="카톡"/>
            </div>
            <button className={styles.go_talk}>채팅문의하기&nbsp;&nbsp;<img src="/go_black.png" alt="가기"/></button>
        </div>
    )
}
const CustomerCenter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>고객센터</div>
            <ul>
                <li className={styles.row}>
                    <span className={styles.header}>전화</span>
                    <span className={styles.info}>1811-2549</span>
                    <span className={styles.header}>팩스</span>
                    <span className={styles.info}>02-512-0456</span>
                </li>
                <li className={styles.row}>
                    <span className={styles.header}>메일</span>
                    <span className={styles.info}>cs@modeal.net</span>
                </li>
                <li className={styles.row}>
                    <span className={styles.header}>주소</span>
                    <span className={styles.info}>서울시 성동구 성수이로 147 아이에스비즈타워 904</span>
                </li>
            </ul>
            <p className={styles.hr}>영업시간 : 월-금 09:00 ~ 19:00</p>
        </div>
    )
}

function Service() {
    return (
        <div className={styles.section}>
            <ServiceHead/>
            <CustomerCenter/>
        </div>
    )
}

export default Service
