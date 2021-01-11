import React, { Component } from 'react';
import axios from 'axios';
import styles from './StepFirst.module.css';


class StepFirst extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }
    // 1단계 "StepFirst"와 연동 [차량 모델]
    getMlistData = async () => {
        const C_CODE = this.props.Ccode; // EstimateHome에서 C_CODE를 가져온 것.
        const { data : { list } } = await axios.get("http://test.modeal.net/_interface/car/model_select.php", {
            params: {
                C_CODE: `${C_CODE}`,
            }
        });
        this.setState( { list } );
        console.log(list);
    }
    componentDidMount(){
        this.getMlistData();
    }

    render() {
        const { getMcode, steps } = this.props;
        return (
            <ul className={styles.listWrapper}>
                {this.state.list.map((M_CODE, index) => {
                    return(
                        <li className={styles.list} key={index}>
                            <a 
                                className={styles.link} 
                                onClick={() => {
                                    // 페이지 전환
                                    steps(1);
                                    getMcode(M_CODE); // 클릭한 대상의 M_CODE
                                    console.log(M_CODE);
                                }}
                                >
                                {M_CODE.M_NAME}
                            </a>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default StepFirst
