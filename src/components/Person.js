import React, { Component } from 'react'

class Person extends Component {

    render() {
        return (
            <div className='name'>
                <div> {this.props.name} </div>
            </div>
        )
    }
}

export default Person