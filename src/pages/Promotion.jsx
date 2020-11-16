import React from 'react';
import styles from "./Promotion.module.css";
import { Switch, Route, NavLink, useLocation, useRouteMatch } from "react-router-dom";
import SubHotIssue from "../components/Pro_Sub_hotissue/SubHotIssue.jsx";
import SubRelease from "../components/Pro_Sub_release/SubRelease.jsx";
import SubBenefit from '../components/Pro_Sub_benefit/SubBenefit.jsx';

const TabMenuItem = [
    { id: 1, title: "#핫이슈", path: "/promotion" },
    { id: 2, title: "#즉시출고", path: "/promotion/release" },
    { id: 3, title: "#모딜혜택", path: "/promotion/benefit" },
]

// const routes = [
//     { 
//         path: "/", 
//         element: <Promotion/>,
//         children: [
//             { id: 1, title: "#핫이슈", path: "/promotion", element: <SubHotIssue/> },
//             { id: 2, title: "#즉시출고", path: "/promotion/release", element: <SubRelease/> },
//             { id: 3, title: "#모딜혜택", path: "/promotion/benefit", element: <SubRelease/> },
//         ]
//     }
// ]

function Promotion() {
    return (
        <>
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

            <Switch>
                <Route exact path="/promotion"><SubHotIssue/></Route>
                <Route path="/promotion/release"><SubRelease/></Route>
                <Route path="/promotion/benefit"><SubBenefit/></Route>
            </Switch>
        </>
    )
}

export default Promotion