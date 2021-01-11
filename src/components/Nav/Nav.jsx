import React from 'react'
import styles from './Nav.module.css';
import classNames from 'classnames/bind';
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import Home from "../../pages/Home.jsx";
import Promotion from "../../pages/Promotion.jsx";
import Estimate from "../../pages/Estimate.jsx";
import Magazine from '../../pages/Magazine';
import Service from "../../pages/Service.jsx";
import Profile from '../../pages/Profile';
import EstimateHome from '../../pages/EstimateHome';
import EstimateProcess from '../../pages/EstimateProcess';

// routing configuration에는 URL에 대한 많은 정보가 담겨져 있지 않다.
// 그렇기 때문에 특정한 URL이 active한지 안한지 알 수가 없다.
// 단순히 URL과 "to" props만 보고 link가 active/inactive가 적용된지 알 수 없음.
// router는 추가적인 computation을 해주기 때문에 이러한 현상을 해결할 수 있다.

const MenuItems = [
    { id: 1, title: "홈", path: "/", src: "/menu/item1.png" },
    { id: 2, title: "프로모션", path: "/promotion", src: "/menu/item2.png" },
    { id: 3, title: "매거진", path: "/magazine", src: "/menu/item3.png" },
    { id: 4, title: "즉시견적", path: "/estimate", src: "/menu/item4.png" },
    { id: 5, title: "고객센터", path: "/service", src: "/menu/item5.png" },
    { id: 6, title: "MY", path: "/profile", src: "/menu/item6.png" }
]

const routes = [
    { path: "/", element: <Home/> },
    { path: "/promotion", element: <Promotion/> },
    { path: "/magazine", element: <Magazine/> },
    { 
        path: "/estimate", 
        element: <Estimate/>,
        children: [
            { path: "/", element: <EstimateHome/> },
            { path: '/process', element: <EstimateProcess/> },
        ]
    },
    { path: "/service", element: <Service/> },
    { path: "/profile", element: <Profile/> },
]

function NavLink ({
    to,
    exact,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
}){
    let location = useLocation(); // Link로 클릭한 대상의 location정보를 알 수 있다. 현재 있는 페이지의 URL정보를 가져온다.(pathname, etc...)
    let isActive = location.pathname === to; // 클릭한 대상은 active한 상태다.
    // console.log(location);
    let allClassName = ( isActive ? `${activeClassName}` : `${inactiveClassName}` );

    return <Link className={allClassName} to={to} {...rest}/>
}
let cx = classNames.bind(styles);
function Nav() {
    let link = cx('link');
    let clicked = cx('link', 'clicked');
    return (
        <div className={styles.nav}>
            <ul className={styles.nav_items}>
                {MenuItems.map(item => {
                    return (
                        <li className={styles.nav_item} key={item.id}>
                        <NavLink 
                            exact={true}
                            to={item.path}
                            inactiveClassName={link}
                            activeClassName={clicked}
                        >
                            <div className={styles.nav_img}>
                                <img src={process.env.PUBLIC_URL + item.src} alt={item.title}/>
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
