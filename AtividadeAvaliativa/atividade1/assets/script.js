/* 
Desenvolver um programa em Javascript onde deve ler modelo, ano de fabricação e preço do veículo 
(o valor que o proprietário deseja receber pelo veículo). Em seguida, o programa deve classificar 
o veículo como: “Novo” (do ano atual), “Seminovo” (até 2 anos de uso) ou “Usado”. 
Também deve apresentar o preço de venda do veículo com um acréscimo de 8% no preço dos veículos 
novos ou de 10% no preço dos veículos classificados como seminovos ou usados. Para a classificação 
e o cálculo do preço de venda do veículo, poderá ser utilizado funções.*/

const botao = document.getElementById('button');


botao.addEventListener('click', function(){
    
    const modelo = document.getElementById('modelo').value;
    const ano = Number(document.getElementById("ano").value);
    let preco = Number(document.getElementById("preco").value);
    
    let condicao = "";


    if (ano === 2025){
        preco = preco + (preco * 0.08);
        condicao = "Novo";
    }else if( ano <= 2027){
        preco = preco + (preco * 0.10);
        condicao = "Semi-Novo";
    }else{
        preco = preco + (preco * 0.10);
        condicao = "Usado";
    }

    let texto = document.createElement('div');
    texto.innerHTML = `
    ${modelo} - ${condicao} <br>
    Preço de Venda R$: ${preco.toFixed(2)}
    `;

    document.body.appendChild(texto);

});



