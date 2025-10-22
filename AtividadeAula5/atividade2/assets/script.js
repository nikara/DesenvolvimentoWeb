/* 
Exercício 01
● Elaborar um programa para uma revenda de veículos. O programa deve ler modelo e preço do veículo. 
Apresentar como resposta o valor da entrada (50%) e o saldo em 12x.

*/

const botao = document.getElementById('button');
botao.addEventListener('click', function(){
    
    const modelo = document.getElementById('modelo').value;
    const preco = Number(document.getElementById("preco").value);

    let promocao = preco * 0.50;
    let saldo =  Math.abs((promocao-preco) /  12) ;

    let texto = document.createElement('div');
    texto.innerText = `
    Promoção: ${modelo}
    Entrada de R$: ${promocao}
    + 12x de R$: ${saldo}
    `;

    document.body.appendChild(texto);

});



