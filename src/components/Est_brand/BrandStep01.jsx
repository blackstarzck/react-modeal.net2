import React, { useEffect, useState } from 'react';
import styles from './BrandStep01.module.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'

function BrandStep01() {
    const { C_CODE } = useParams();
    const [ list, setList ] = useState([]);
    useEffect(() => {
        axios
        .get(
            'http://localhost:8080/_interface/car/model_select.php', {
            params: {
                C_CODE: `${C_CODE}`,
            }
            })
        .then(res => {
            setList(res.data.list)
        })
    }, [C_CODE]);
    return (
        <ul className={styles.listWrapper}>
        {list.map((M_CODE, index) => {
            return (
                <li className={styles.item} key={index}>
                    <a 
                        className={styles.link}
                        href=""
                        // to={`/estimate/process/${C_CODE}/${M_CODE.M_CODE}`}
                    >
                        {M_CODE.M_NAME}
                    </a>
                    <button>상세보기 &gt;</button>
                </li>
                )
            })}
        </ul>
    );
}

export default BrandStep01
