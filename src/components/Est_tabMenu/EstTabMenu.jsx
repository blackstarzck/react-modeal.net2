import React, { Component } from 'react'
import styles from './EstTabMenu.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
class EstTabMenu extends Component {
    render() {
        return (
            <div className={styles.tab_menu_container}>
                <ul className={styles.menuItem_wrapper}>
                    {this.props.tabs.map(tab => {
                        const click = cx('active');
                        const active = (tab === this.props.selected ? `${click}` : '');
                            return (
                                <li className={styles.menuItem} key={tab}>
                                    <a className={`${active}`} onClick={ () => this.props.setSelected(tab) }>
                                        { tab }
                                    </a>
                                </li>
                            )
                        })}
                </ul>
                { this.props.children }
            </div>
        )
    }
}

export default EstTabMenu
