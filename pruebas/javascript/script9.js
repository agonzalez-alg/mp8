var fs= 1.5;

document.getElementById("peque").addEventListener('click', peque);
document.getElementById("mediano").addEventListener('click', mediano);
document.getElementById("grande").addEventListener('click', grande);


function peque() {
    fs=fs-0.5;
    document.getElementById("txt").style.fontSize=(fs+"rem");
    //alert(fs+"rem");
}

function mediano() {
    fs=fs;
    document.getElementById("txt").style.fontSize=(fs+"rem");
    //alert(fs+"rem");
}

function grande() {
    fs=fs+0.5;
    document.getElementById("txt").style.fontSize=(fs+"rem");
    //alert(fs+"rem");
}
