import React from 'react'
import styles from './Btn.module.css'
import classNames from "classnames/bind"

let cx = classNames.bind(styles);

function Btn({ color, display }) {
    let className = cx(
        'circle', 
        `${color}`, 
        `${display}`
        );
    
    return (
        <div className={styles.link}>
            <a className={styles.btn} href="">
                <div className={className}>
                    <div className={styles.bar}/>
                    <div className={styles.bar}/>
                </div>
            </a>
        </div>
    )
}

export default Btn
