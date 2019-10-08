import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            file: 'unknown',
            result: 'unknown',
            program: 'unknown',
            route: 'unknown',
            server: 'unknown'
        };
    }

    queryServer = (event) => {
        const that = this;
        fetch(event.currentTarget.dataset.url)
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
                    Main program: {this.state.program} file: {this.state.file} result: {this.state.result}<br/>
                    Qux route: {this.state.route} server: {this.state.server} result: {this.state.result}
                </p>
                <button data-url="/you-rang" onClick={this.queryServer}>Main Server</button>
                <button data-url="/qux/you-rang" onClick={this.queryServer}>Call Qux</button>
            </div>
        );
    }
}

export default App;