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
        return (
            <div className="pageWrapper">
                <EstiPageBody>
                    <EstiPage isSelected={this.state.currentPage === "Home"}>
                        <EstimateHome
                            setPage={ this.setProcessPage }
                            getLogo={ this.getCarLogoList }
                            />
                    </EstiPage>
                    <EstiPage isSelected={this.state.currentPage === "Process"}>
                        <EstimateProcess
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
