import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  helloWorld = 'Hello world! From a string.';
  
  state = {
    sRow1: 1,
    sRow2: 2

  }

  addTheNumber = () => {
    this.setState((state)=> ({ 
      sRow2: state.sRow2+1
    }));
  };

  
  decreaseTheNumber = (aint) => {
    this.setState((state)=> ({ 
      sRow1: state.sRow1 - aint
    }));
  };

  render() {
    console.log(this.helloWorld);
    var theSecondRow = <span>this is the second row</span>;
    var aint = 2
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          { this.helloWorld }
          {theSecondRow}
          {this.state.sRow1} + {this.state.sRow2} = {this.state.sRow1 + this.state.sRow2}
          <button onClick={this.addTheNumber}>Add Number Up by 1</button>
          <button onClick={this.decreaseTheNumber.bind(this, aint)}>Decrease Number down by {aint}</button>
        </header>

        
      </div>
    );
  }
}

export default App;
