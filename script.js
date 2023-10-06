// Botões
const visor = document.getElementById('visor');
const operador = document.getElementById('operador');

const btn0 = document.getElementById('botao0');
const btn1 = document.getElementById('botao1');
const btn2 = document.getElementById('botao2');
const btn3 = document.getElementById('botao3');
const btn4 = document.getElementById('botao4');
const btn5 = document.getElementById('botao5');
const btn6 = document.getElementById('botao6');
const btn7 = document.getElementById('botao7');
const btn8 = document.getElementById('botao8');
const btn9 = document.getElementById('botao9');
const btnMais = document.getElementById('botaoMais');
const btnMenos = document.getElementById('botaoMenos');
const btnVezes = document.getElementById('botaoVezes');
const btnDividir = document.getElementById('botaoDividir');
const btnIgual = document.getElementById('botaoigual');

// Clicando nos botões
btn0.addEventListener('click', handleAcumulador);
btn1.addEventListener('click', handleAcumulador);
btn2.addEventListener('click', handleAcumulador);
btn3.addEventListener('click', handleAcumulador);
btn4.addEventListener('click', handleAcumulador);
btn5.addEventListener('click', handleAcumulador);
btn6.addEventListener('click', handleAcumulador);
btn7.addEventListener('click', handleAcumulador);
btn8.addEventListener('click', handleAcumulador);
btn9.addEventListener('click', handleAcumulador);

btnIgual.addEventListener('click', calculo)

btnMais.addEventListener('click', soma);
btnMenos.addEventListener('click', menos);
btnVezes.addEventListener('click', vezes);
btnDividir.addEventListener('click', dividir);


//Variáveis

let acumulador1 = "";
let acumulador2 = "";
let acumulador3 = "";
let acumulador4 = "";

let resultado = 0;


// Funções

function handleAcumulador() {
  if (operador.classList.contains('ativo')) {
    acumulador3 = this.value
    acumulador4 = acumulador4 + this.value
    visor.innerText = acumulador2 + operador.value + acumulador4
  } else {
    acumulador1 = this.value
    acumulador2 = acumulador2 + this.value
    visor.innerText = acumulador2
  }
}

function soma() {
  operador.classList.add('ativo', 'soma');
  operador.value = ' + '
  acumulador3 = this.value
  acumulador4 = acumulador4 + this.value
  visor.innerText = acumulador2 + operador.value + acumulador4
}

function menos() {
  operador.classList.add('ativo', 'subtracao');
  operador.value = ' - '
  acumulador3 = this.value
  acumulador4 = acumulador4 + this.value
  visor.innerText = acumulador2 + operador.value + acumulador4
}

function vezes() {
  operador.classList.add('ativo', 'vezes');
  operador.value = ' * '
  acumulador3 = this.value
  acumulador4 = acumulador4 + this.value
  visor.innerText = acumulador2 + operador.value + acumulador4
}

function dividir() {
  operador.classList.add('ativo', 'divisao');
  operador.value = ' / '
  acumulador3 = this.value
  acumulador4 = acumulador4 + this.value
  visor.innerText = acumulador2 + operador.value + acumulador4
}

function calculo() {
  acumulador2 = acumulador2 * 1
  acumulador4 = acumulador4 * 1
  if (operador.classList.contains('soma')) {
    resultado = acumulador2 + acumulador4
    visor.innerText = resultado
  }

  if (operador.classList.contains('subtracao')) {
    resultado = acumulador2 - acumulador4
    visor.innerText = resultado
  }

  if (operador.classList.contains('divisao')) {
    resultado = acumulador2 / acumulador4
    visor.innerText = resultado
  }

  if (operador.classList.contains('vezes')) {
    resultado = acumulador2 * acumulador4
    visor.innerText = resultado
  }

  operador.classList.remove('ativo', 'subtracao', 'vezes', 'divisao', 'soma')
  acumulador1 = "";
  acumulador2 = "";
  acumulador3 = "";
  acumulador4 = "";

}