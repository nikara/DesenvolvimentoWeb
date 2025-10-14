/* 
1.Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um 
programa que calcule e escreva: 
●  a maior e a menor altura do grupo; 
●  a média de altura das mulheres; 
●  o número de homens.
*/

// Gerador de homens e mulheres 

const sexoArray = [];
for( let i = 0; i < 15; i++){
    const numeroBinario = Math.floor(Math.random()*2);
    if(valor === 0){
        sexoArray.push("M");
        break;
    }else if(valor === 1){
        sexoArray.push("F");
        
    }

}

// Gerador de alturas 

const alturaArray = [];
for (let i = 0; i < 15; i++){
    const altura = (Math.random() * (2.00 - 1.50.toFixed(2)));
    alturaArray.push(altura)
}

// Maior e Menor Alturas

