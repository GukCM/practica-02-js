const n1 = parseInt(prompt("Ingresa un valor: "));
const n2 = parseInt(prompt("Ingresa un valor: "));
const calculadora = (n1,n2) =>{
    let suma = n1 + n2;
    let resta = n1 - n2;
    let multi = n1 * n2;
    let div = n1 / n2;
    return console.log("Suma: " + suma + " Resta: " + resta
    + " Multiplicacion: " + multi + " División: " + div);
}


console.log(calculadora(n1,n2));