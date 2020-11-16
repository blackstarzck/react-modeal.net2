import React, { Component } from 'react'

class EstiPageBody extends Component {
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        )
    }
}

export default EstiPageBody