import React, { Component } from 'react';
import EstimateHome from './EstimateHome';
import EstimateProcess from './EstimateProcess';
import EstiPage from './EstiPage';
import EstiPageBody from './EstiPageBody';

class Estimate extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: "Home",
            C_CODE: [],
        }
    }
    setProcessPage = (page) => {
        this.setState({ currentPage: page });
    }
    getCarLogoList = (code) => {
        const C_CODE = code;
        this.setState(C_CODE);
        console.log("C_CODE : " + C_CODE.C_CODE);
    }
    render () {
        // EstiPageBody는 브랜드에서 step, step 다음 페이지를 보여주고 있다.
        return (
            <div className="pageWrapper">
                <EstiPageBody>
                    <EstiPage isSelected={this.state.currentPage === "Home"}>
                        <EstimateHome // 즉시견적 홈(브랜드)에 관련된 컴포넌트
                            setPage={ this.setProcessPage }
                            getLogo={ this.getCarLogoList }
                            />
                    </EstiPage>
                    <EstiPage isSelected={this.state.currentPage === "Process"}>
                        <EstimateProcess // 즉시견적 -> 브랜드 -> step 관련된 컴포넌트
                            setPage={ this.setProcessPage }
                            current={ this.state.currentPage }
                            C_CODE={ this.state.C_CODE }
                            />
                    </EstiPage>
                </EstiPageBody>
            </div>
        )
    }
}

export default Estimate
