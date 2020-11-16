import React, { Component } from 'react'


class ProcessBody extends Component {
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        )
    }
}

export default ProcessBody
