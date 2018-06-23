import React, { Component } from 'react'

class Person extends Component {

    render() {
        return (
            <div className='name'>
                <p> {this.props.name} </p>
            </div>
        )
    }
}

export default Person