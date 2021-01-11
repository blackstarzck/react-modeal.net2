import React, { Component } from 'react';
import styles from './Promotion.module.css';
import classNames from 'classnames/bind';

class Promotion extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: "#핫이슈"
        }
    }
    setSelected = (tab) => {
        this.setState({ selected: tab });
    }

    render() {
        return (
            <TabNav
                tabs={['#핫이슈', '#즉시출고', '#모딜혜택']}
                selected={ this.state.selected }
                setSelected={ this.setSelected }>

                <Content isSelected={this.state.selected === '#핫이슈'}/>
                <Content isSelected={ this.state.selected === '#즉시출고'}/>
                <Content isSelected={ this.state.selected === '#모딜혜택'}/>
            </TabNav>
        )
    }
}

let cx = classNames.bind(styles);
class TabNav extends Component {
    render(){
        return (
            <>
                <ul className={styles.tab_nav}>
                    { this.props.tabs.map(tab => {
                        const click = cx('active');
                        const active = ( tab === this.props.selected ? `${click}` : '' );
                        return (
                            <li className={styles.tab_nav_item} key={ tab }>
                                <a className={ `${active}` } onClick={ () => this.props.setSelected(tab) }>
                                    {tab}
                                </a>
                            </li>
                        )
                    }) }
                </ul>
                { this.props.children }
            </>
        )
    }
}

class Content extends Component {
    render(){
        if(this.props.isSelected){
            return (
                <div className="contents">
                    <ul>
                        <li>
                            <a href="">
                                <img src="" alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
            )
        }
        return null;
    }
}

class Contents extends Component {
    render(){
        if(this.props.isSelected){
            return (
                <>

                </>
            )
        }
        return null;
    }
}

export default Promotion