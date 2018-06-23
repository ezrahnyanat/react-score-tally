import React, { Component } from 'react'
import '../App.css';

class Counter extends Component {

    state = {
        score: 0
    }

    plusOne = () => {
        this.setState({
            score: this.state.score + 1
        })
    }

    plusTwo = () => {
        this.setState({
            score: this.state.score + 2
        })
    }

    plusThree = () => {
        this.setState({
            score: this.state.score + 3
        })
    }

    plusFour = () => {
        this.setState({
            score: this.state.score + 4
        })
    }

    plusFive = () => {
        this.setState({
            score: this.state.score + 5
        })
    }

    minusOne = () => {
        this.setState({
            score: this.state.score - 1
        })
    }

    reset = () => {
        this.setState({
            score: 0
        })
    }

  render() {
    return (
        <div>
            <div className='score'> {this.state.score} </div>
            <button onClick={this.plusOne}>+ 1</button>
            <button onClick={this.plusTwo}>+ 2</button>
            <button onClick={this.plusThree}>+ 3</button>
            <button onClick={this.plusFour}>+ 4</button>
            <button onClick={this.plusFive}>+ 5</button>
            <button onClick={this.minusOne}>- 1</button>
            <button onClick={this.reset}>Reset</button>
        </div>
    )
  }
}

export default Counter
