let sexo = ['M','F','F','M','F','F','M','M','F','F','F','F','F','F','F'];
let altura = [176.3,192.6,197.2,162.7,161.3,164.2,183.2,182.5,178.1,163.9,192.9,173.7,160.6,191.5,196.7];


// Busca a maior e a menor altura

maior = 0.0;
menor = 0.0;

for(i = 0; i < altura.length; i++){
    if (altura[i] < altura[i+1]){
        maior = altura[i+1];
    }
    if (altura[i] > altura[i+1]){
        menor = altura[i+1];
    }
}

console.log(maior);
console.log(menor);


// Busca a  média de altura das mulheres

count = 0;
acum = 0.0;

for (i = 0; i < sexo.length; i++){
    if ( sexo[i] == 'F'){
        count = count + 1;
        acum = acum + altura[i] ;
    }
}

console.log(count);
console.log(acum);

media = acum / count;
console.log(media);

// Busca o numero de homens

acum = 0;

for(i = 0; i < sexo.length; i++){
    if(sexo[i] == 'M'){
        acum = acum + 1;
    }
}

console.log(acum);

