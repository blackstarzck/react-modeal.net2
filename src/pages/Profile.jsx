import React from 'react';
import styles from './Profile.module.css';
import classNames from 'classnames/bind'

const LogIn = () => {
    return (
        <div className={styles.head}>
            <button className={styles.login_btn}>로그인</button>
        </div>
    )
}
let cx = classNames.bind(styles);
const ProfileDetails = () => {
    let inActive = cx('list', 'inActive');
    return (
        <div className={styles.list_container}>
            <ul className={styles.list_wrapper}>
                <li className={styles.list}><a href="">나의 견적함</a></li>
                <li className={styles.list}><a href="">나의 상담요청</a></li>
                <li className={styles.list}><a href="">나의 출고 차량</a></li>
                <li className={styles.list}><a href="">공지사항</a></li>
                <li className={styles.list}><a href="">자주 묻는 질문</a></li>
                <li className={styles.list}><a href="">모두가 딜러</a></li>
                <li className={inActive}><a href="">개인정보 수집정책</a></li>
                <li className={inActive}><a href="">서비스 이용약관</a></li>
                <li className={inActive}>
                    <a href="">푸시 알림(특가, 이벤트 등)</a>
                    <div className={styles.switch_btn}>
                        <input id="tt" type="checkbox"/>
                        <label For="tt">
                            <span className={styles.circle}></span>
                        </label>
                    </div>
                </li>
            </ul>
        </div>
    )
}

function Profile() {
    return (
        <>
            <LogIn/>
            <ProfileDetails/>
        </>
    )
}

export default Profile
