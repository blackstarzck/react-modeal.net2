import React, { Component } from 'react';
import styles from './StepTrdList.module.css';

export class StepTrdList extends Component {
    render() {
        const { G_CODE, getGcode } = this.props;
        const list = [];
        for(let i = 0; i < G_CODE.OPTIONS.length; i++){
            const item = G_CODE.OPTIONS[i];
            list.push(
                <li className={styles.opt_list}>
                    <div className={styles.art}>
                        <div className={styles.row}>
                            <input type="checkbox"/>
                            <label htmlFor="">
                                <span className={styles.chkBox}></span>
                                <span className={styles.opt_nm}>{ item.OPTION_NM }</span>
                            </label>
                            <span className={styles.price}>{ item.ADD_OPTION_AMT } 만원</span>
                        </div>
                    </div>
                    <div className={styles.art}>
                        <div className={styles.row}>
                            <span className={styles.heading}>옵션가 합계</span>
                            <div className={styles.price}>
                                <span className={styles.data}></span>
                                <span className={styles.txtStyle}>만원</span>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.heading}>최종 차량가</span>
                            <div className={styles.price}>
                                <span className={styles.data}></span>
                                <span className={styles.txtStyle}>만원</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.art}></div>
                </li>
            )
        }
        
        return (
            <div className="wrapper">
                <div className={styles.lists}>
                    <div className={styles.link} onClick={() => {getGcode(G_CODE);}}>
                        <span className={styles.heading}>
                            {G_CODE.G_NAME}
                        </span>
                        <div className={styles.amt}>
                            <span className={styles.data}>
                                {G_CODE.M_AMT}
                            </span>
                            <span className={styles.txtStyle}> 
                                &nbsp;&nbsp;만원
                            </span>
                        </div>
                    </div>
                </div>
                <ul className={styles.opt_lists}>
                    { list }
                </ul>
            </div>
        )
    }
}

export default StepTrdList
