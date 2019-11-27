import React, {useState, useEffect} from 'react';

export default class YouRang extends React.Component{
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
            workingDir: 'no data'
        }
    }

    const [youRangData, setYouRangData] = useState(youRangInit);    

    useEffect(() => { queryYouRang(); }, []);

    //Function that accesses the corresponding command in ./routes/index.js then
    //waits for a response from the micro service, when it receives that, puts
    //it in a .json format then console.logs it and sets it to this.setState so that
    //the object can be assessed later.
    const queryYouRang = () => {
        fetch('/system-environment/you-rang')
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                this.setYouRangData(result);
            })
            .catch((ex) =>{    
                alert(ex);
            });
    };
   

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
                        </tr>git push --set-upstream origin week11
                        <tr>
                            <td>result</td>
                            <td className='left'>{this.state.result}</td>
                        </tr>
                        <tr>
                            <td>server</td>
                            <td className='left'>{this.state.server}</td>
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
                        </tr>
                        <tr>
                            <td className='left'>{this.state.workingDir}</td>
                        </tr>
                        
                    </tbody>
                </table>

            </React.Fragment>
        );
    };

};