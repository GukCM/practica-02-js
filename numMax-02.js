
const numMax = (n1,n2,n3) => {
    if(n1 > n2 && n1 > n3){
        console.log("El mayor es: ", n1);
    }
    if(n2 > n1 && n2 > n3){
        console.log("El mayor es: ", n2);
    }if(n3>n1 && n3> n2){
        console.log("El mayor es: ", n3);
    }
    return "Si";
}
const n1 = parseInt(prompt("Insert number 1: "));
const n2 = parseInt(prompt("Insert number 2: "));
const n3 = parseInt(prompt("Insert number 3: "));

console.log(numMax(n1,n2,n3));


