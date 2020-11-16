import React from 'react';
import styles from './ProcessTop.module.css';

function ProcessTop({ prev, current, setPage }) {
    console.log(current);
    return (
        <div className={styles.top}>
            <div className={styles.prev} onClick={() => {
                if(current){
                    prev();
                } else if(current = -1){
                    setPage("Home");
                }
            }}>
                <img src="/icon_prev.png" alt="뒤로"/>
            </div>
            <h3 className={styles.title}>직접 딜러가 되세요!</h3>
            <p className={styles.sub_title}>3종 세트보다 큰 딜러 이윤을 현찰로 드립니다.</p>
        </div>
    )
}

export default ProcessTop