// 🅰 Alterar o texto de um elemento <h1>

// Seleciona o elemento <h1> que possui o ID 'titulo'.
// O método getElementById busca um elemento específico pelo seu ID.
const titulo = document.getElementById('titulo');

// Altera o conteúdo de texto do elemento <h1>.
// innerText modifica o texto visível dentro do elemento.
titulo.innerText = "Bem-vindo ao meu site";


// 🅱 Alterar estilos de elementos com a classe 'texto'

// Seleciona todos os elementos que possuem a classe 'texto'.
// getElementsByClassName retorna uma coleção de elementos (HTMLCollection).
const textos = document.getElementsByClassName('texto');

// Verifica se existem pelo menos dois elementos com essa classe
if (textos.length >= 2) {
  // Altera a cor do texto do primeiro elemento para azul
  textos[0].style.color = "blue";

  // Altera a cor do texto do segundo elemento para verde
  textos[1].style.color = "green";

  // Altera a cor de fundo do segundo elemento para amarelo
  textos[1].style.backgroundColor = "yellow";
}


// C Selecionar o primeiro parágrafo com a classe 'texto' e alterar o texto

// querySelector retorna o primeiro elemento que corresponde ao seletor CSS informado.
// Aqui, selecionamos o primeiro elemento com a classe 'texto'.
const primeiroParagrafo = document.querySelector('.texto');

// Modifica o texto desse parágrafo
primeiroParagrafo.innerText = "Este é um novo texto";


// 🅳 Contar quantos elementos <p> existem na página

// querySelectorAll retorna todos os elementos que correspondem ao seletor CSS.
// Neste caso, estamos buscando todos os elementos <p> (parágrafos).
const todosParagrafos = document.querySelectorAll('p');

// Exibe no console a quantidade de parágrafos encontrados
console.log(`Existem ${todosParagrafos.length} parágrafos na página.`);


// 🅴 Criar e adicionar um novo parágrafo à página

// Cria um novo elemento <p> usando createElement
const novoParagrafo = document.createElement('p');

// Define o texto que será exibido dentro do novo parágrafo
novoParagrafo.innerText = "Este é um novo parágrafo";

// Seleciona a <div> com o ID 'novaDiv' onde o novo parágrafo será inserido
const novaDiv = document.getElementById('novaDiv');

// Adiciona o novo parágrafo como filho da <div> selecionada
novaDiv.appendChild(novoParagrafo);

// Alterar atributos <a href>
let link = document.getElementById('link');
link.setAttribute('href','https://www.uol.com.br');

// Modificando elementos do DOM

// Seleciona o elemento HTML que possui o ID 'parágrafoNovo'.
// Isso geralmente é um <p id="parágrafoNovo">...</p> no HTML.
let paragráfo = document.getElementById('parágrafoNovo');

// Adiciona a classe CSS 'destaque' ao elemento.
// Isso pode aplicar estilos definidos no CSS, como cor, tamanho, etc.
// Exemplo no CSS: .destaque { color: red; font-weight: bold; }
paragráfo.classList.add('destaque');

// Remove a classe 'destaque' do elemento.
// Isso desfaz os estilos aplicados pela classe, se ela estiver presente.
paragráfo.classList.remove('destaque');
