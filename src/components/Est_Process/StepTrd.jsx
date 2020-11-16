import React, { Component } from 'react';
import axios from 'axios';
import styles from './StepTrd.module.css';
import classNames from 'classnames/bind'
import StepTrdList from './StepTrdList.jsx';

export class StepTrd extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            active: false
        }
    }
    // 4단계 "StepTrd"와 연동 [그레이드-옵션 details]
    getGradeOpttData = async () => {
        const C_CODE = this.props.Ccode;
        const M_CODE = this.props.Mcode;
        const L_CODE = this.props.Lcode;
        const { data : { list } } = await axios.get("http://localhost:8080/_interface/car/grd_option_select.php", {
            params: {
                C_CODE: `${C_CODE}`,
                M_CODE: `${M_CODE}`,
                L_CODE: `${L_CODE}`,
            }
        });
        this.setState( { list } );
        console.log(list);
    }
    toggle = () => {
        console.log("hi");
        let cx = classNames.bind(styles);
        let activeList = cx("list", "active");
        this.setState({ active: !this.state.active });
    }
    getGrdaeCode = (code) => {
        const G_CODE = code;
        this.setState(G_CODE);
        console.log("G_CODE : " + G_CODE.G_CODE);
    }

    componentDidMount(){
        this.getGradeOpttData();
    }
    render() {
        return (
            <ul className={styles.listWrapper}>
                {this.state.list.map((G_CODE, index) => {
                    return(
                        <StepTrdList
                            key={index}
                            G_CODE={G_CODE}
                            getGcode={ this.getGrdaeCode }
                        />
                    )
                })}
            </ul>
        )
    }
}

export default StepTrd
