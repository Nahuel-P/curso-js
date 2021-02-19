
// 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
// Un número primo es aquel que solo es divisible por sí mismo y la unidad


let numero = parseInt(prompt("Introduce un número"))
let divisor = 0


if(numero===1) console.log('El número no es válido')

for(let i=2; i<numero; i++){
    if (numero%i == 0){ 
        console.log(`${numero} no es primo`)
        divisor++
        break;
    }
}

if (divisor==0 && numero!=1) console.log(`${numero} es primo`);