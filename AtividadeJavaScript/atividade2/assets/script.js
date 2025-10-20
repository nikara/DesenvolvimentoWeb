/*
2.Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e 
a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1. 
Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima: 
●  a média das idades das pessoas que responderam ótimo; 
●  a quantidade de pessoas que responderam regular; 
●  a porcentagem de pessoas que responderam bom entre todos os espectadores 
analisados.
*/

// Criar um enum para 
const opiniao = Object.freeze({
    Otimo: 3,
    Bom: 2,
    Ruim: 1,
});

const resposta = [];
const formulario = document.getElementById("formulario");
const resultado = document.createElement("div");
resultado.id = "resultado";
document.body.appendChild(resultado);

formulario.addEventListener("submit",function (event){
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const opiniaoSelecionada = parseInt(document.querySelector('input[name="opiniao"]:checked')?.value);

    if(!nome || isNaN(idade)|| isNaN(opiniaoSelecionada)){
        alert("Preencha todos os campos corretamente.");
        return;
    }

    resposta.push({nome,idade,opiniao});

    // Limpa o formulário
    formulario.reset();

    if(resposta.length === 15){
        let somaIdadeOtimo = 0;
        let qtdOtimo = 0;
        let qtdRuim = 0;
        let qtdBom = 0;
        
        resposta.forEach(pessoa => {
            if(pessoa.opiniao === opiniao.Otimo){
                somaIdadeOtimo += pessoa.idade;
                qtdOtimo++;
            }
            if(pessoa.opiniao === opiniao.Ruim){
                qtdRuim++;
            }
            if(pessoa.opiniao === opiniao.Bom){
                qtdBom++;
            }
        });

        const mediaOtimo = qtdOtimo > 0 ? (somaIdadeOtimo / qtdOtimo).toFixed(2) : 0;
        const porcentagemBom = ((qtdBom / resposta.length) * 100).toFixed(2);

        resultado.innerHTML = `
        <h3> Resultado da Pesquisa </h3>
        <p>Média das idades de quem respondeu "Ótimo": ${mediaOtimo}</p>
        <p>Média das idades de quem respondeu "Ruim": ${qtdRuim}</p>
        <p>Porcentagem de pessoas que responderam "Bom": ${porcentagemBom}%</p>
        `;
    }else{
        resultado.innerHTML = `<p>Resposta registradas: ${resposta.length}/15</p>`;
    }
});