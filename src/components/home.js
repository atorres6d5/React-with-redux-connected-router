import React, { Component } from 'react';



class Home extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <code>This this the Home page</code>
          <a onClick={()=>this.props.history.push('/')}>Click Here for the other page</a>
        </p>
      </div>
    );
  }

}

export default Home;
