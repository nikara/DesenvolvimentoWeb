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

// Exibindo uma mensagem inicial
alert('Este é um texto externo carregado via JavaScript');

// --------------------------------------
// Variáveis e Tipagem Dinâmica
// --------------------------------------

let nome = 'Nickolas'; // String

// Atualizando o valor da variável dentro de um bloco
if (true) {
  nome = "Carlos"; // Atualiza sem redeclarar
  console.log(nome); // Saída: Carlos
}

// Concatenação de strings
let nomeCompleto1 = "Nickolas " + nome; // Usando aspas duplas
let nomeCompleto2 = `Nickolas ${nome}`; // Usando template string

// Outros tipos de dados
let ativo = true;       // Boolean
let peso = 80.5;        // Number (float)
let idade = 47;         // Number (inteiro)

// --------------------------------------
// Diferença entre var, let e const
// --------------------------------------

// var possui escopo global ou de função
var exemploVar = 'Global';
{
    var exemploVar = 'Modificado dentro do bloco';
}
console.log('var:', exemploVar); // Saída: Modificado dentro do bloco

// let possui escopo de bloco (mais seguro e recomendado)
let exemploLet = 'Global';
{
    let exemploLet = 'Modificado dentro do bloco';
    console.log('let dentro do bloco:', exemploLet); // Saída: Modificado dentro do bloco
}
console.log('let fora do bloco:', exemploLet); // Saída: Global

// const define valores constantes (não pode ser reatribuído)
const PI = 3.14;
// PI = 5; // ❌ Erro: não é possível reatribuir uma constante

// Porém, objetos e arrays definidos com const podem ser modificados internamente
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

let valores = [10, 'Marcelo', 5.55, true]; // Array com tipos mistos

// --------------------------------------
// Objetos e Manipulação de DOM
// --------------------------------------

let titulo = document.querySelector('h1');
console.log(titulo.textContent); // Exibe o conteúdo atual do <h1>
titulo.textContent = 'Novo Texto'; // Altera o conteúdo do <h1>

// --------------------------------------
// Funções
// --------------------------------------

function soma(num1 = 2, num2 = 3) {
    console.log(`Soma: ${num1 + num2}`);
}

soma(8, 10); // Saída: Soma: 18
soma(9, 8);  // Saída: Soma: 17
soma();      // Saída: Soma: 5 (valores padrão)

let valor1 = 10;
let valor2 = 20;
if(valor1 > valor2){
    console.log('Valor 1 é  maior que valor 2');
}else {
    console.log('Valor 2 é maior que valor 1');
}
