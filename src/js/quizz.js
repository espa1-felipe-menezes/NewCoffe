let respostas = [];
let perguntas = [
    "Que tipo de encomenda deseja fazer?",
    "Qual o sabor da encomenda?",
    "Qual o peso da encomenda?",
    "Qual o endereço para entrega?",
    "Deseja algum item complementar? (velas de aniversário, guardanapos, pratos descartáveis...)"
];

let contador = 0;
let pergunta = document.getElementById("pergunta");

function trocaPergunta() {
    const input = document.getElementById("txtInput");
    const resp = input.value;
    
    respostas.push(resp);
    input.value = ""; // limpa o input
    contador++;

    if (contador < perguntas.length) {
        pergunta.innerHTML = perguntas[contador];
    } else {
        const divResp = document.getElementById("inputResposta");
        pergunta.innerHTML = "Encomenda registrada! Obrigado!<br>";
        divResp.innerHTML = "Detalhes do pedido:<br><br>";

        for (let x = 0; x < respostas.length; x++) {
            divResp.innerHTML += `${x + 1}. ${perguntas[x]}<br><strong>Resposta:</strong> ${respostas[x]}<br><br>`;
        }
    }
}
