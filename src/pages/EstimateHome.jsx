import React, { Component } from 'react';
import SubTop from '../components/Est_top/SubTop.jsx';
import EstTabMenu from '../components/Est_tabMenu/EstTabMenu.jsx';
import EstTab from '../components/Est_tabMenu/EstTab.jsx';
import Brand from '../components/Est_brand/Brand.jsx';
import Price from '../components/Cont_price/Price.jsx';

class EstimateHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: '브랜드'
        }
    }
    setSelected = (tab) => {
        this.setState({ selected: tab });
    }
    setProcessPage = page => {
        this.props.setPage(page);
    }
    getCarLogoList = code => {
        this.props.getLogo(code);
    }


    render() {
        return (
            <div className='section home' /* style={{backgroundColor: "blue"}}*/>
                <SubTop/>
                <EstTabMenu
                    tabs={['브랜드', '가격대']}
                    selected={ this.state.selected }
                    setSelected={ this.setSelected }>
                        <EstTab 
                            isSelected={ this.state.selected === '브랜드'}>
                            <Brand
                                setPage={ this.setProcessPage }
                                getLogo={ this.getCarLogoList }
                            />
                        </EstTab>
                        <EstTab 
                            isSelected={ this.state.selected === '가격대'}>
                            <Price/>
                        </EstTab>
                </EstTabMenu>
            </div>
        )
    }
}

export default EstimateHome
