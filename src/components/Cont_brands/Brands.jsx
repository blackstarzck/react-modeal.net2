import React from 'react';
import styles from "./Brands.module.css";
import classNames from "classnames/bind";


const BrandsItem = [
    { id: 1, title: '현대', path: '/hyundai' },
    { id: 2, title: '제네시스', path: '/genesis' },
    { id: 3, title: '기아', path: '/kia' },
    { id: 4, title: '르노삼성', path: '/reno' },
    { id: 5, title: 'BMW', path: '/bmw' },
    { id: 6, title: '벤츠', path: '/benz' },
    { id: 7, title: '아우디', path: '/audi' },
    { id: 8, title: '렉서스', path: '/lexus' },
    { id: 9, title: '폭스바겐', path: '/woxwagen' },
    { id: 10, title: '+더보기', path: '/more' }
];

let cx = classNames.bind(styles);

function Brands() {
    let className = cx('cont', 'brands');
    
    return (
        <div className={className}>
            <h3 className="cont_title">브랜드</h3>
            <ul className={styles.item_wrapper}>
                {BrandsItem.map(item => {
                    return(
                        <li  key={item.id}>
                            <a className={styles.link} href="">
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Brands
