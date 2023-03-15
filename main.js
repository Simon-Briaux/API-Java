Madiv = document.getElementById("boutton");
Madiv.addEventListener("click", mafonction);

function mafonction(){
alert("appelAPI")
fetch('Donnemoiunchiffrealeatoire.php').then((resp) => resp.json())
.then(function(respJsonData) {
// data est la réponse http de notre API.
console.log(respJsonData);
alert(respJsonData[0]);
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
