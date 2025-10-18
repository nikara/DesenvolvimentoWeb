/* 
1.Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um 
programa que calcule e escreva: 
●  a maior e a menor altura do grupo; 
●  a média de altura das mulheres; 
●  o número de homens.
*/

//region Objeto pessoa

const pessoa = {
    sexo:"",
    altura: null
};
// Array de pessoas
const pessoas = Array.from({length: 15}, () => ({...pessoa}));
//#endregion

//#region Gerador de dados
for( let i = 0; i < 15; i++){
    const numeroBinario = Math.floor(Math.random()*2);
    pessoas[i].sexo = numeroBinario === 0 ? "M" : "F";
    const altura = (Math.random() * (2.00 - 1.50) + 1.50);
    pessoas[i].altura = parseFloat(altura.toFixed(2));
}
//#endregion

//#region Loop para coletar os dados do exercicio
let maior = pessoas[0].altura;
let menor = pessoas[0].altura
let media = 0;
let numeroDeMulheres = 0;
let numeroDeHomens = 0;

for(let i = 0; i < pessoas.length; i++){
    const alturaAtual = pessoas[i].altura;
    if(alturaAtual > maior){
        maior = alturaAtual;
    }
    if(alturaAtual < menor){
        menor = alturaAtual;
    }
    
    if(pessoas[i].sexo === "F"){
        media = media + alturaAtual;
        numeroDeMulheres++
    }

    if(pessoas[i].sexo === "M"){
        numeroDeHomens++;
    }
}
//#endregion

//#region Inserção dos dados
const tabela = document.querySelector("#tabelaPessoa tbody");
pessoas.forEach((pessoa,index) => {
    const linha = document.createElement("tr");
    linha.innerHTML =`
        <td>${index+1}</td>
        <td>${pessoa.sexo}</td>
        <td>${pessoa.altura}</td>
    `;
    tabela.appendChild(linha);
});

const dados = document.getElementById("resumoDados");
dados.innerHTML =`
Maior altura: ${maior}m<br>
Menor altura: ${menor}m<br>
Média de altura das mulheres: ${media}m<br>
Número de homens: ${numeroDeHomens}
`;



