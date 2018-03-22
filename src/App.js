import React, { Component } from 'react';
import './App.css';
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    inputLength : 0
  }

  onChangeHandler = (event) => {  
    const inputLength = event.target.value.length;
    this.setState({ inputLength: inputLength });
  }


  render() {
    return (
      <div className="App">
        {/* <ol>    
          <4>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <5>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <6>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        */}
        <input className="Input" onChange={(event) => this.onChangeHandler(event)} />    
        <p>{this.state.inputLength}</p>   
        <Validation textLength={this.state.inputLength} />
        <Char />
      </div>
    );
  }
}

export default App;
