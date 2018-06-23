import React, { Component } from 'react';
import './App.css';

import Counter from './components/Counter'
import Person from './components/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className='alignLeft'>
            <Person name='Anita' />
            <Counter />
          </div>
          <div className='alignLeft'>
            <Person name='Bettye' />
            <Counter />
          </div>
          <div className='alignLeft'>
            <Person name='Dawna' />
            <Counter />
          </div>
          <div className='alignLeft'>
            <Person name='Dyan' />
            <Counter />
          </div>
          <div className='alignLeft'>
            <Person name='Elena' />
            <Counter />
          </div>
          <div className='alignLeft'>
            <Person name='Ellen' />
            <Counter />
          </div>
          <div className='alignLeft'>
            <Person name='Jeanne' />
            <Counter />
          </div>
          <div className='alignLeft'>
            <Person name='Kathy' />
            <Counter />
          </div>
          <div className='alignLeft'>
            <Person name='Melinda' />
            <Counter />
          </div>
          <div className='alignLeft'>
            <Person name='Nancy' />
            <Counter />
          </div>
          <div className='alignLeft'>
            <Person name='Nickie' />
            <Counter />
          </div>
          <div className='alignLeft'>
            <Person name='Ruby' />
            <Counter />
          </div>
          <div className='alignLeft'>
            <Person name='Shirley' />
            <Counter />
          </div>
          <div className='alignLeft'>
            <Person name='Sue' />
            <Counter />
          </div>
      </div>
    );
  }
}

export default App;
