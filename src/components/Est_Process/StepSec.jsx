import React, { Component } from 'react';
import axios from 'axios';
import styles from './StepSec.module.css';

class StepSec extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }
    // 2단계 "StepSec"와 연동 [라인업]
    getLineUptData = async () => {
        const C_CODE = this.props.Ccode;
        const M_CODE = this.props.Mcode;
        const { data : { list } } = await axios.get("http://test.modeal.net/_interface/car/lineup_select.php", {
            params: {
                C_CODE: `${C_CODE}`,
                M_CODE: `${M_CODE}`,
            }
        });
        this.setState( { list } );
        console.log(this.state.list);
    }
    componentDidMount(){
        this.getLineUptData();
    }

    render() {
        const { getLcode, steps } = this.props;
        return (
            <ul className={styles.listWrapper}>
                {this.state.list.map((L_CODE, index) => {
                    return(
                        <li className={styles.list} key={index}>
                            <a 
                                className={styles.link} 
                                onClick={() => {
                                    // 페이지 전환
                                    steps(2);
                                    getLcode(L_CODE); // 클릭한 대상의 M_CODE
                                }}
                                >
                                {L_CODE.L_NAME}
                            </a>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default StepSec
