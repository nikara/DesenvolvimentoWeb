/* 
Elaborar um programa que leia as últimas notícias da sua região e armazene-as em um vetor. 
Exibir na página, a cada inclusão, somente a quantidade de notícias cadastradas. O programa 
deve conter um botão que solicite o número de notícias que o usuário deseja visualizar e, 
então, liste as notícias em ordem inversa da inclusão. Ou seja, apenas as notícias mais recentes 
devem ser listadas, de acordo com o número informado pelo usuário. Validar esse número para que 
seja inferior ou igual à quantidade de notícias cadastradas. A Figura ilustra a página do exercício 
com um exemplo em que o usuário solicitou as 3 últimas notícias
.*/

const adicionar = document.getElementById('adicionar');
const listar = document.getElementById('listar');

const noticias = [];




adicionar.addEventListener('click',function(){

    noticias.push(document.getElementById('Notice').value);
    const NumNotice = document.getElementById('NumNotice');
    NumNotice.innerText = noticias.length;

});


listar.addEventListener('click',function(){


    for(let i = (noticias.length); i > (noticias.length-3); i--){
        let Board = document.createElement('div');
        
        Board.innerHTML = `
        ${noticias[i-1]}
        ${i}
        `;
        document.body.appendChild(Board);
    }


});





