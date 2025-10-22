/* 
Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um 
cliente. Exiba o valor a ser pago, cfme exemplo:
*/

const botao = document.getElementById('button');
botao.addEventListener('click', function(){
    
    const preco = Number(document.getElementById('preco').value);
    const peso = Number(document.getElementById("peso").value);
    let gramas = peso / 1000;
    let saldo = preco * gramas;


    let texto = document.createElement('div');
    texto.textContent = `
    Valor a pagar R$:${saldo.toFixed(2)};
    `;

    document.body.appendChild(texto);

});



