import React, { Component } from 'react';
import './App.css';
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    inputLength : 0,
    input: "",
    charComponents: []
  }

  onCharClickHandler = (event, charComponentKey) => {   
    const charIndexToRemove = this.state.charComponents.findIndex(c => c.key == charComponentKey);
    let newInput =this.state.input.split("");   
    newInput.splice(charIndexToRemove, 1);  
    let charComponents = [...this.state.charComponents];
    charComponents.splice(charIndexToRemove, 1); 
    this.setState({ input: newInput.join(""), charComponents: charComponents});  
  }

  
  onChangeHandler = (event) => {    
    const inputLength = event.target.value.length;
    const input = event.target.value;
    const newChar = event.target.value[inputLength-1];
    this.setState({ inputLength: inputLength, input: input });
  
    const chars = [...this.state.input];   
    chars.push(newChar);  
   
    const charComponents = chars.map((c, i) => {
      return <Char click={(event) => {this.onCharClickHandler(event, i)}} 
                   key={i} 
                   letter={c} />
    });
    this.setState({ charComponents: charComponents});
  }


  render() {   
    return (
      <div className="App">
        {/* <ol>            
          <6>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        */}
        <input 
          value={this.state.input}
          className="Input" 
          onChange={(event) => this.onChangeHandler(event)}
           />    
        <p>{this.state.inputLength}</p>   
        <Validation textLength={this.state.inputLength} />
        {this.state.charComponents}
      </div>
    );
  }
}

export default App;