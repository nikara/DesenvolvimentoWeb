/* 
Elaborar um programa para uma lan house de um aeroporto – O programa deve ler o valor de cada 15 
minutos de uso de um computador e o tempo de uso por um cliente em minutos. Informe o valor a ser pago 
pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral. A Figura 
exibe um exemplo com dados do programa.

*/

const botao = document.getElementById('button');
botao.addEventListener('click', function(){
    
    const valor = Number(document.getElementById('valor').value);
    const tempo = Number(document.getElementById("tempo").value);

    const mediaDoTempo = Math.ceil(tempo/15);

    const total = mediaDoTempo * valor;

    let texto = document.createElement('div');
    texto.innerHTML = `
    Valor a Pagar R$ ${total.toFixed(2)}
    `;

    document.body.appendChild(texto);

});



