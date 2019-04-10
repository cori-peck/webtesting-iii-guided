import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    action: 'nothing',
  }
  render() {
    return (
      <div className="App">
        <Greeter save={this.save} delete={this.delete} />
      </div>
    );
  }

  save = () => {
    console.log('saving you')
  }

  delete = () => {
    console.log('deleteing all')
  }
}

  export function Greeter(props) {
    return <button onClick={props.delete}>Save</button>
  }

export default App;
