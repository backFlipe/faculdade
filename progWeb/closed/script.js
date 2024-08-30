var janelaAberta = window.open('','','width=600, height=600');
function testarJanela(){
    if(janelaAberta.closed){
        alert("A janela foi fechada!");
    }
    else{
        alert("A janela está aberta!")
    };
}
