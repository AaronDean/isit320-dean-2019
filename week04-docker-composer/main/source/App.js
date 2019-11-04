import React from 'react';

export default class App extends React.Component{

    queryYouRang = () => {
        fetch('/system-environment/you-rang')
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            const serverData = document.getElementById('sys-env-you-rang');
            serverData.textContent = JSON.stringify(result, null, 4);
        })
        .catch((ex) =>{
            alert(ex);
        });
    };

    queryCheckoutBranch = () => {
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
    };

    render(){
        return(
            <React.Fragment>
                <h1>Main Dean</h1>

                <button onClick={this.queryYouRang}>You Rang</button>
            </React.Fragment>
        );
    };

};