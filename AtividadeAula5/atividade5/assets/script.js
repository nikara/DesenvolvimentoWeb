/* 
Uma farmácia está com uma promoção – Na compra de duas unidades de um mesmo medicamento, o 
cliente recebe como desconto os centavos do valor total. Elaborar um programa que leia descrição e preço 
de um medicamento. Informe o valor do produto na promoção. A Figura apresenta a tela com um exemplo 
de dados de entrada e saída do programa
*/

const botao = document.getElementById('button');
botao.addEventListener('click', function(){
    
    const medicamento = document.getElementById('medicamento').value;
    const peso = Number(document.getElementById("peso").value);

    let promocao = Math.floor(peso * 2);

    let texto = document.createElement('div');
    texto.innerHTML = `
    Promoção de ${medicamento}
    <br>
    Leve 2 por apenas R$:${promocao.toFixed(2)}
    `;

    document.body.appendChild(texto);

});



