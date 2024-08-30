function changeMyColor(){
    var element = document.getElementById('myDiv');
    element.style.backgroundColor = '#2ef8';
}

function firstFunction(){
    document.getElementById("teste").innerHTML += 'Mouse Sobre!<br>';
}

function secFunction(){
    document.getElementById('teste').innerHTML += "Clicado!<br>";
}

function thirdFunction(){
    document.getElementById('teste').innerHTML += "Mouse Fora!<br>";
}

var elemento = document.getElementById('div');
function fourthFunction(){
    elemento.style.backgroundColor = "green";
}
elemento.addEventListener('click', fourthFunction);

function removeEvent(){
    elemento.removeEventListener('click', fourthFunction);
}

var x = document.getElementById('button');
x.addEventListener('mouseover', firstFunction);
x.addEventListener('click', secFunction);
x.addEventListener('mouseout', thirdFunction);