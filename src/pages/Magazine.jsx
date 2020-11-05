import React from 'react';
import styles from './Magazine.module.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import SubReview from "../components/Mag_review/SubReview.jsx";
import SubTip from "../components/Mag_tip/SubTip.jsx";
import SubStory from "../components/Mag_story/SubStory.jsx";

const TabMenuItem = [
    { id: 1, title: "#출고후기", path: "/magazine" },
    { id: 2, title: "#모딜TIP", path: "/magazine/tip" },
    { id: 3, title: "#모딜스토리", path: "/magazine/story" },
]

function Magazine() {
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
                <Route exact path="/magazine"><SubReview/></Route>
                <Route path="/magazine/tip"><SubTip/></Route>
                <Route path="/magazine/story"><SubStory/></Route>
            </Switch>
        </>
    )
}

export default Magazine
