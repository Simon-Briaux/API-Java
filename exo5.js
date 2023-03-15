function mafonction(){
    fetch('exo5.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: '5'
        })
    })
    .then((resp) => resp.json())
    .then(function(respJsonData) {
        // data est la réponse http de notre API.
        console.log(respJsonData);
        UpdateDiv("arenne",respJsonData[0]);
    })
    .catch(function(error) {
        // This is where you run code if the server returns any errors
        console.log(error);
    });
}

function UpdateDiv(id,text){
    var e = document.getElementById(id).innerHTML = text;
}

setInterval(mafonction, 2000);