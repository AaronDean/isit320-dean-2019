/**
 * Created by charlie on 11/5/16.
 */

window.onload = function() {
    fetch('/system-environment/you-rang')
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            const serverData = document.getElementById('serverData');
            serverData.textContent = JSON.stringify(result, null, 4);
        })
        .catch((ex) => {
            alert(ex);
        });
};
