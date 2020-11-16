import React, { Component } from 'react'
import styles from '../components/Est_Process/ProcessBody.module.css';
import ProcessBody from '../components/Est_Process/ProcessBody.jsx';
import ProcessTop from '../components/Est_Process/ProcessTop.jsx';
import Step from '../components/Est_Process/Step.jsx';
import StepFirst from '../components/Est_Process/StepFirst.jsx';
import StepSec from '../components/Est_Process/StepSec.jsx';
import StepTrd from '../components/Est_Process/StepTrd';



class EstimateProcess extends Component {
    constructor(props){
        super(props)
        this.state = {
            currnetStep: 0,
            M_CODE: [],
            L_CODE: [],
            G_CODE: []
        }
    }

    // ↓ M, L, G 코드 가져오는 함수
    getModelCode = (code) => {
        const M_CODE = code;
        this.setState(M_CODE);
        console.log("M_CODE : " + M_CODE.M_CODE);
    }
    getLineUpCode = (code) => {
        const L_CODE = code;
        this.setState(L_CODE);
        console.log("L_CODE : " + L_CODE.L_CODE);
    }
    getGrdaeCode = (code) => {
        const G_CODE = code;
        this.setState(G_CODE);
        console.log("G_CODE : " + G_CODE.G_CODE);
    }

    // ↓ step1 ~ 3 페이지 전환 함수
    setStepPage = (step) => {
        this.setState({ currnetStep: step })
    }
    goBack = () => {
        this.setState({ currnetStep: this.state.currnetStep - 1 });
    }
    setProcessPage = page => {
        this.props.setPage(page);
    }

    render () {
        console.log("process rendered???");
        return (
            <div className={styles.stepWrapper}>
                <ProcessTop
                    setPage={ this.setProcessPage }
                    prev={ this.goBack }
                    current={ this.state.currnetStep }/>
                <ProcessBody
                    current={ this.props.current }>

                    <Step isSelected={ this.state.currnetStep === 0 }>
                        <StepFirst
                            Ccode={ this.props.C_CODE }
                            steps={ this.setStepPage }
                            getMcode={ this.getModelCode }
                            />
                    </Step>
                    <Step isSelected={ this.state.currnetStep === 1 }>
                        <StepSec
                            Ccode={ this.props.C_CODE }
                            Mcode={ this.state.M_CODE }
                            steps={ this.setStepPage }
                            getLcode={ this.getLineUpCode }
                            /> 
                    </Step>
                    <Step isSelected={ this.state.currnetStep === 2 }>
                        <StepTrd
                            Ccode={ this.props.C_CODE }
                            Mcode={ this.state.M_CODE }
                            Lcode={ this.state.L_CODE }
                            getGcode={ this.getGrdaeCode }
                            />
                    </Step>
                </ProcessBody>
            </div>
        )
    }
}

export default EstimateProcess