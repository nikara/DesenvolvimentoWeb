var display = document.getElementById("display");

var listenerBtn=[];

// Operadores
listenerBtn.push(document.getElementById("sum"));
listenerBtn.push(document.getElementById("subtraction"));
listenerBtn.push(document.getElementById("multiplication"));
listenerBtn.push(document.getElementById("division"));

// Numeros
listenerBtn.push(document.getElementById("num0"));
listenerBtn.push(document.getElementById("num1"));
listenerBtn.push(document.getElementById("num2"));
listenerBtn.push(document.getElementById("num3"));
listenerBtn.push(document.getElementById("num4"));
listenerBtn.push(document.getElementById("num5"));
listenerBtn.push(document.getElementById("num6"));
listenerBtn.push(document.getElementById("num7"));
listenerBtn.push(document.getElementById("num8"));
listenerBtn.push(document.getElementById("num9"));

// Controladores

var btnResult = document.getElementById("result");
var btnCleanDisplay = document.getElementById("cleanDisplay");
var btnDeleteDigit = document.getElementById("deleteDigit");
listenerBtn.push(document.getElementById("point"));

var pointCounter = 0;
var point = 1;

for(var i = 0; i < listenerBtn.length; i++){
    listenerBtn[i].addEventListener("click",writeOnDisplay);
}

btnResult.onclick = function(){
    calculateResult();
};

btnDeleteDigit.onclick = function(){
    deleteLastDigit();
};

btnCleanDisplay.onclick = function(){
    display.value = "";
    pointCounter = 0;
}
