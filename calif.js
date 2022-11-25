let calif = parseInt(prompt("Ingresa tu calificacion: "));

const ordi = (calif) =>{
    if(calif === 10){
        console.log("Sobresaliente");
    }
    if(calif <=9 && calif >=7){
        console.log("Bien");
    }
    if(calif <= 6 && calif >=0){
        console.log("Malo");
    }
    return "Pansaste.....o no"; 
}

console.log(ordi(calif));