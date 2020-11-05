import React from 'react';
import Btn from "./Btn.jsx";
import styles from "./ContHeader.module.css";

export function ContHeeader ({ title, bold, desc, colorClassName, display }){
    return(
        <div className={styles.top}>
            <div className={styles.title}>
                <h3 className={styles.cont_title}>{title} <b>{bold}</b></h3>
                <p>{desc}</p>
            </div>
            <Btn
                color={colorClassName}
                display={display}
            />
        </div>
    )
}

export default ContHeeader