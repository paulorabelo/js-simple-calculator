let resultado = document.getElementById("resultado");

        function paraResultado(value) {
            resultado.value += value;
        }

        function operacao(operator) {
            resultado.value += operator;
        }

        function calcular() {
            try {
                resultado.value = eval(resultado.value);
            } catch (error) {
                resultado.value = "Error";
            }
        }

        function limparResultado() {
            resultado.value = "";
        }