import React from 'react';

export default class App extends React.Component{
    //creating an object that can be accessed later to display info that is
    //brought in from a micro service.
    constructor(props){
        super(props);
        this.state = {
            program: 'no data',
            file: 'no data',
            result: 'no data',
            server: 'no data',
            directory: 'no data',
            hostname: 'no data',
            home: 'no data',
            workingDir: 'no data',
            branches: ['no data']
        }
    }
    //Function that accesses the corresponding command in ./routes/index.js then
    //waits for a response from the micro service, when it receives that, puts
    //it in a .json format then console.logs it and sets it to this.setState so that
    //the object can be assessed later.
    queryYouRang = () => {
        fetch('/system-environment/you-rang')
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                this.setState(result);
            })
            .catch((ex) =>{
    //the object can be assessed later.
                alert(ex);
            });
    };
    //This function uses async and await to access ./routes/index.js then wait
    //for a response allowing getBranches to run through its process and return
    //the needed data ***I'm not sure at this time if asynce and await are independent
    //of each other or if they're tied together.***
    queryGetBranches = async () => {
        try{
            let response = await fetch('/system-environment/getBranches');
            let result = await response.json();
            console.log(result);
            this.setState({ branches: result.branches });
        } catch (ex) {
            alert(ex);
        }
    };

    //old Function query
    /*queryCheckoutBranch = () => {
        fetch('/system-environment/checkoutBranch')
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                const serverData = document.getElementById('sys-env-you-rang');
                serverData.textContent = JSON.stringify(result, null, 4);
            })
            .catch((ex) =>{
                alert(ex);
            });
    };*/

    render(){
        return(
            <React.Fragment>
                <h1>Main Dean</h1>
                
                <h2>You Rang</h2>

                <table>
                    <thead>
                        <tr>Name</tr>
                        <tr>Value</tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>program</td>
                            <td className='left'>{this.state.program}</td>
                        </tr>
                        <tr>
                            <td>file</td>
                            <td className='left'>{this.state.file}</td>
                        </tr>
                        <tr>
                            <td>result</td>
                            <td className='left'>{this.state.result}</td>
                        </tr>
                        <tr>
                            <td>server</td>
                            <td className='leftbranch	no data'>{this.state.server}</td>
                        </tr>
                        <tr>
                            <td>directory</td>
                            <td className='left'>{this.state.directory}</td>
                        </tr>
                        <tr>
                            <td>hostname</td>
                            <td className='left'>{this.state.hostname}</td>
                        </tr>
                        <tr>
                            <td>Home</td>
                            <td className='left'>{this.state.home}</td>
                            <td className='left'>{this.state.server}</td>
                        </tr>
                        <tr>
                            <td className='leftbranch	no data'>{this.state.workingDir}</td>
                        </tr>
                        
                    </tbody>
                </table>

                <button onClick={this.queryYouRang}>You Rang</button>

                <h2>Get Branches</h2>

                <p>
                    Speak into the System Environment service running in a Docker
                    container and ask it to return a list of the branches in my
                    repository for this class.
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.branches.map((branch, index) => {
                            return (
                                <tr key= {index}>
                                    <td>branch</td>
                                    <td className='left'>{branch}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <button onClick={this.queryGetBranches}>List Available Branches</button>
            </React.Fragment>
        );
    };

};