import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{

  state = {
    count:0
  }

  increase = () => {
    this.setState({count:this.state.count + 1})
  }

  render(){
    return(
      <div>
        <h1>click time {this.state.count}</h1>
        <button onClick={this.increase}>Click</button>
      </div>
    )
  }

}

export default App