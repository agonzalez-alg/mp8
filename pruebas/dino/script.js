var dino= document.getElementById("dino");
var obstaculo= document.getElementById("obstaculo");

function salto(){
    if(dino.classList !="saltando"){
    dino.classList.add("saltando");
}
setTimeout(function(){
    dino.classList.remove("saltando")
},500);
}