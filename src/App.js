import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

