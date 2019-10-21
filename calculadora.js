function calculadora(){
    var a = parseInt(document.querySelector("#valor1").value);
    var b = parseInt(document.querySelector("#valor2").value);
    var operador = document.querySelector("#operador").value;
    var calcular;

    switch(operador){
        case "sumar":
        calcular = a+b;
        break;
        case "restar":
        calcular = a-b;
        break;
        case "multi":
        calcular = a*b;
        break;
        case "dividir":
        calcular = a/b;
        break;
    }
    document.querySelector("#resultado").innerHTML = calcular;
};