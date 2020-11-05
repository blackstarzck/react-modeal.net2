import React from 'react';
import styles from './EstTabMenu.module.css';

function EstTabMenu() {
    return (
        <div className={styles.tab_menu_container}>
            <ul className={styls}>
                <li className={styles.menuItem_brand}>브랜드</li>
                <li className={styles.menuItem_price}>가격대</li>
            </ul>
        </div>
    )
}

export default EstTabMenu
