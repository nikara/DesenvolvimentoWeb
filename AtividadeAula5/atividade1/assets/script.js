/* 
Exercício 01
● Elaborar um programa para uma Vídeo Locadora, que leia o título e a duração de um filme em minutos. 
Exiba o título do filme e converta a duração para horas e minutos.
*/





function calculo(){

    const nome = document.getElementById('Nome').value;
    const duracao = Number(document.getElementById("duracao").value);

    let horas = Math.floor(duracao/60);
    let minutos = duracao % 60;

    let msgTitulo = document.getElementById("msgTitulo");
    let msgDuracao = document.getElementById("msgDuracao");

    msgTitulo.innerText= `Título: ${nome}`;
    msgDuracao.innerText = `Duração: Horas ${horas}, Minutos ${minutos}`;

}

const botao = document.getElementById('button');
botao.addEventListener('click', function(){
    
calculo();




});



