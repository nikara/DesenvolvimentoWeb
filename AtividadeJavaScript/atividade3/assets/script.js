/*
 3.Faça um programa que receba 10 números, calcule e imprima a soma dos números 
pares e a soma dos números primos.
*/
const formulario = document.getElementById("formulario");
const lista = document.getElementById("listaNumeros");
let cont = 0;
let somaPares = 0;
let somaPrimos = 0; 

function DetectaPrimo(n){
    if(n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
}

formulario.addEventListener("submit",function (event){
    event.preventDefault();
    const numero = document.getElementById("numero").value;
    const valor = Number(numero);
    

    if(numero === "") return;
    if(valor === 0)return;
    if(cont >= 10) return;

    if(valor%2 === 0){
        somaPares += valor;
    }
    if(DetectaPrimo(valor)){
        somaPrimos += valor;
    }
    
    

    cont++;
    if(cont === 10){
        const resultado = document.createElement("p");
        resultado.textContent = `Soma dos Pares: ${somaPares} Soma dos Primos: ${somaPrimos}`;
        document.body.appendChild(resultado);
    }
    const novoItem = document.createElement("li");
    novoItem.textContent = numero;

    lista.appendChild(novoItem);
    document.getElementById("numero").value = "";
});
