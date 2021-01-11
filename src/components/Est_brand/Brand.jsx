import React, { useState, useEffect } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import styles from './Brand.module.css';
import axios from 'axios';

function Brand(props) {
    const [ list, setPosts ] = useState([]);
    useEffect(() => {
        axios
        .get(
            "http://test.modeal.net/_interface/car/create_select.php")
            .then(res => {
                setPosts(res.data);
            });
    }, []);
    const { setPage, getLogo } = props;
    console.log("brand rendered??");
    return (
        <div className={styles.container}>
            <ul className={styles.wrapper}>
                {list.map((C_CODE, index) => {
                    return (
                        <li className={styles.item} key={index}>
                            <a onClick={() => {
                                setPage("Process"); // 페이지 전환
                                getLogo(C_CODE); // 클릭한 대상의 C_CODE
                            }}>
                                <img src={`http://localhost:8080${C_CODE.C_IMG}`} alt={C_CODE.C_NAME}/>
                                <p>{C_CODE.C_NAME}</p>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Brand