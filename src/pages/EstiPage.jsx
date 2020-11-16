import React, { Component } from 'react'

class EstiPage extends Component {
    render() {
        if(this.props.isSelected){
            return (
                <div>
                    { this.props.children }
                </div>
            )
        }
        return null;
    }
}

export default EstiPage
