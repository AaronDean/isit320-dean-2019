import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {            
          file: 'unknown',
          result: 'unknown',
          program: 'unknown'
      };
  }

  queryServer = () => {
      const that = this;
      fetch('/you-rang')
          .then(function(response) {
              return response.json();
          })
          .then(function(json) {
              console.log('parsed json', json);
              that.setState(foo => (json));
          })
          .catch(function(ex) {
              console.log('parsing failed, URL bad, network down, or similar', ex);
          });
  };

  render() {
      return (
          <div className="App">
              <div className="App-header">
                  <h2>Welcome to React</h2>
              </div>

              <p className="App-intro">
                  result: {this.state.result} file: {this.state.file} program: {this.state.program}
              </p>
              <button onClick={this.queryServer}>Bar</button>
          </div>
      );
  }
}

export default App;