import React from 'react';

class App extends React.Component {

    constructor(props)
    super(props)
    this.state = { count: 1 };
    handleClick() {
          this.state = { count: 1 };
    }
    

  render() {
    return <h1>Testing</h1>;
    <button onClick={()=> {this.state.count}} >+</button>
  }
}

export default App;
