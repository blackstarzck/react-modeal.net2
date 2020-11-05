import React from 'react'
import styles from './Nav.module.css';
import { NavLink, useRouteMatch } from "react-router-dom";

const MenuItems = [
    { id: 1, title: "홈", path: "/", src: "/menu/item1.png" },
    { id: 2, title: "프로모션", path: "/promotion", src: "/menu/item2.png" },
    { id: 3, title: "매거진", path: "/magazine", src: "/menu/item3.png" },
    { id: 4, title: "즉시견적", path: "/estimate", src: "/menu/item4.png" },
    { id: 5, title: "고객센터", path: "/service", src: "/menu/item5.png" },
    { id: 6, title: "MY", path: "/profile", src: "/menu/item6.png" }
]


function Nav() {
    // let { path, url } = useRouteMatch();
    // console.log(path)
    return (
        <div className={styles.nav}>
            <ul className={styles.nav_items}>
                {MenuItems.map(item => {
                    return (
                        <li className={styles.nav_item} key={item.id}>
                        <NavLink 
                            exact
                            isActive={(match) => {
                                console.log(match);
                                if(match){
                                    return true;
                                }
                            }}
                            to={item.path}
                            className={styles.nav_link}
                            activeClassName={styles.clicked}
                        >
                            <div className={styles.nav_img}>
                                <img src={item.src} alt={item.title}/>
                            </div>
                            <span className={styles.nav_title}>{item.title}</span>
                        </NavLink>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Nav
