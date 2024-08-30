function calcPorcentagem(){
    var quantHomens = parseInt(document.getElementById("quantHomens").value);
    var quantMulheres = parseInt(document.getElementById("quantMulheres").value);

    var total = quantHomens + quantMulheres;

    var percHomens = (quantHomens / total) * 100;
    var percMulheres = (quantMulheres / total) * 100;

    var tabela = "<table>";
    tabela += "<tr><th></th><th>Quantidade</th><th>Percentual</th></tr>";
    tabela += "<tr><td>Homens</td><td>" + quantHomens + "</td><td>" + percHomens.toFixed(2) + "%</td></tr>";
    tabela +=  "<tr><td>Mulheres</td><td>" + quantMulheres + "</td><td>" + percMulheres.toFixed(2) + "%</td></tr>";
    tabela += "</table>";

    document.getElementById("tabelaPorcentagens").innerHTML = tabela;
}