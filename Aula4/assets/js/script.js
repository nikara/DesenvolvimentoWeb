/*
    Aula de JavaScript - Conceitos Básicos
    --------------------------------------
    Este script apresenta os fundamentos essenciais do JavaScript, incluindo:

    - Tipagem dinâmica
    - Diferenças entre var, let e const
    - Tipos de dados
    - Escopo de variáveis
    - Arrays e objetos
    - Funções
    - Manipulação de DOM
*/

// --------------------------------------
// Mensagem Inicial
// --------------------------------------

alert('Este é um texto externo carregado via JavaScript');

// --------------------------------------
// Variáveis e Tipagem Dinâmica
// --------------------------------------

let nome = 'Nickolas'; // Tipo String

// Atualizando o valor da variável dentro de um bloco
if (true) {
  nome = "Carlos"; // Reatribuição permitida com let
  console.log(nome); // Saída: Carlos
}

// Concatenação de strings
let nomeCompleto1 = "Nickolas " + nome; // Com operador +
let nomeCompleto2 = `Nickolas ${nome}`; // Com template string

// Outros tipos de dados
let ativo = true;       // Boolean
let peso = 80.5;        // Number (float)
let idade = 47;         // Number (inteiro)

// --------------------------------------
// Diferença entre var, let e const
// --------------------------------------

// var: escopo global ou de função
var exemploVar = 'Global';
{
    var exemploVar = 'Modificado dentro do bloco';
}
console.log('var:', exemploVar); // Saída: Modificado dentro do bloco

// let: escopo de bloco
let exemploLet = 'Global';
{
    let exemploLet = 'Modificado dentro do bloco';
    console.log('let dentro do bloco:', exemploLet); // Saída: Modificado
}
console.log('let fora do bloco:', exemploLet); // Saída: Global

// const: valor constante
const PI = 3.14;
// PI = 5; // ❌ Erro: não pode reatribuir

// Objetos e arrays com const podem ser modificados internamente
const array = [3.14];
array[0] = 5; // ✅ Permitido
console.log(array); // Saída: [5]

// --------------------------------------
// Arrays
// --------------------------------------

let idades = [42, 36, 7, 99];
console.log('Idades:');
for (let i = 0; i < idades.length; i++) {
    console.log(`Idade ${i}:`, idades[i]);
}

let valores = [10, 'Marcelo', 5.55, true]; // Tipos mistos

// --------------------------------------
// Objetos e Manipulação de DOM
// --------------------------------------

// Seleciona o elemento <h1> da página
let titulo = document.querySelector('h1');

// Exibe o conteúdo atual do <h1>
console.log(titulo.textContent);

// Altera o conteúdo do <h1>
titulo.textContent = 'Novo Texto';

// --------------------------------------
// Funções
// --------------------------------------

function soma(num1 = 2, num2 = 3) {
    console.log(`Soma: ${num1 + num2}`);
}

soma(8, 10); // Saída: Soma: 18
soma(9, 8);  // Saída: Soma: 17
soma();      // Saída: Soma: 5 (valores padrão)

// --------------------------------------
// Condicional if/else
// --------------------------------------

let valor1 = 10;
let valor2 = 20;

if (valor1 > valor2) {
    console.log('Valor 1 é maior que valor 2');
} else {
    console.log('Valor 2 é maior que valor 1');
