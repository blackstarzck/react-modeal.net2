import React, { Component } from 'react';

class Step extends Component {
    render() {
        if(this.props.isSelected){
            return (
                <>
                    { this.props.children }
                </>
            )
        }
        return null;
    }
}

export default Step
