import React from 'react';
import sytles from './SubTop.module.css';

function SubTop() {
    return (
        <div className={sytles.top}>
            <h2>직접 딜러가 되세요!</h2>
            <p>차량 구매 시 발생하는 딜러이윤을 모두 드립니다.</p>
            <button className={sytles.modeal_into}>
                자세히 알아보기&nbsp;&nbsp;
                <img src="/go_white.png" alt="화살표"/>
            </button>
        </div>
    )
}

export default SubTop
