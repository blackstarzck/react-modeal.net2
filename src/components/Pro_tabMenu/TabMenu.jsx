import React from 'react';
import styles from "./TabMenu.module.css";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";
import SubHotIssue from '../Pro_Sub_hotissue/SubHotIssue';
import SubRelease from '../Pro_Sub_release/SubRelease';

const TabMenuItem = [
    { id: 1, title: "#핫이슈", path: "/promotion" },
    { id: 2, title: "#즉시출고", path: "/promotion/release" },
    { id: 3, title: "#모딜혜택", path: "/promotion/benefit" },
]

const routes = [
    { 
        path: "/", 
        children: [
            { id: 1, title: "#핫이슈", path: "/", element: <SubHotIssue/> },
            { id: 2, title: "#즉시출고", path: "/", element: <SubRelease/> },
            { id: 3, title: "#모딜혜택", path: "/", element: <SubRelease/> },
        ]
    }
]

function TabMenu() {
    // let location = useLocation();
    // let routeMatches = useRouteMatch(routes, location);
    // console.log(routeMatches);
    
    return (
        <div className={styles.tab_menu}>
            <ul className={styles.tab_menu_wrapper}>
                {TabMenuItem.map(item => {
                    return (
                        <li className={styles.item} key={item.id}>
                            <NavLink
                                exact
                                className={styles.link} 
                                activeClassName={styles.clicked}
                                to={item.path}>{item.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TabMenu
