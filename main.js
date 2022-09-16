var carta1 = {
    nome: "Bulbasauro",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
}

var carta2 = {
    nome: "Pikachu",
    atributos: {
        ataque: 5,
        defesa: 7,
        magia: 9
    }
}

var carta3 = {
    nome: "Mew",
    atributos: {
        ataque: 10,
        defesa: 10,
        magia: 10
    }
}

var cartas = [carta1, carta2, carta3];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcaoTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcaoTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcaoTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true){
            return radioAtributos[i].value;
        }
    }
}       

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();

    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if(valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Você ganhou"
    } else if(valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "Você perdeu"
    } else {
        elementoResultado.innerHTML = "Vocề empatou"
    }
}