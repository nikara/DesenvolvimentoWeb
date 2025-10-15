/* 
● No seu script, faça o seguinte:
a. Use innerText para alterar o texto do elemento <h1> para "Bem-vindo ao meu site!".
b. Use innerHTML para adicionar um novo parágrafo dentro da <div> com o texto "Este é um novo 
parágrafo.".
c. Use setAttribute para mudar o endereço do link para "https://www.senac.br/".
d. Use classList.add para adicionar a classe 'destaque' ao parágrafo.
e. Crie um novo elemento <p> com o texto "Este é outro parágrafo." e adicione-o ao final do <body> usando 
appendChild.
Dica: 
- para criar um novo elemento, você pode usar o método document.createElement. 
- Para acessar o <body>, você pode usar document.body.
*/

// A) Resposta:
document.getElementsByTagName('h1').titulo.innerText = "Bem-vindo ao meu site!";

// B) Resposta:

document.getElementById('minhaDiv').innerHTML = "<p> Este é um novo parágrafo.</p>";

// C) Resposta:

document.getElementById('meuLink').setAttribute('href','https://www.ligamagic.com.br/?view=dks/decks');

// D) Resposta:

document.getElementById('meuParagrafo').classList.add('destaque');

// E) Resposta:

let novoParagrafo = document.createElement('p');
novoParagrafo.innerText = "Este é outro parágrafo.";
document.body.appendChild(novoParagrafo);


