let resultado = document.getElementById("resultado");
let resultadoNoDisplay = false;

function paraResultado(valor) {
    if(resultadoNoDisplay){
        resultado.value = "";
        resultadoNoDisplay = false;
    }
    resultado.value += valor;
}

function operacao(operacao) {
    resultado.value += operacao;
}

function calcular() {
    try {
        resultado.value = eval(resultado.value);
        resultadoNoDisplay = true;
    } catch (error) {
        resultado.value = "Error";
    }
}

function limparResultado() {
    resultado.value = "";
    resultadoNoDisplay = false;
}