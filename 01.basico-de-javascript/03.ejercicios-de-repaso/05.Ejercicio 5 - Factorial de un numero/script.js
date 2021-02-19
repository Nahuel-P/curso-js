// 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
//     El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

//     !5 = 5*4*3*2*1 = 120


let numero = parseInt(prompt("Introduce un número"))
let resultado = 1;

for(let i = numero; i>0; i--){
    resultado *=i;
}

console.log(`El factorial de ${numero} es ${resultado}`)