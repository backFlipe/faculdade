let sexo = prompt("Insira seu sexo (M/F): ");
sexo = sexo.toUpperCase();

if (sexo == "M"){
    alert("Sexo Masculino");
}
else if (sexo == "F"){
    alert("Sexo Feminino");
}
else{
    alert("Sexo Inválido");
}
