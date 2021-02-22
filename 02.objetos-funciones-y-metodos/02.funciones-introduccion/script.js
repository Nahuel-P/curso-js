// Son fragmentos de código que se escribe para ejecutar una tarea y no volver a escribir el mismo código más de una vez.
// Ayuda a modularizar el código.
// Las funciones deben realizar una sola tarea 

// sintaxis: 
// function nombreFuncion(){
//     //código a ejecutar
// }

// sintaxis nueva a partir de ES6:

// const nombreFuncion =()=>{
//     //código a ejecutar
// }

// Puede recibir parámetros (No hay limites de la cantidad de parámetros)
// function nombreFuncion(parametro1, parametro2){
//     //código a ejecutar
// }


// const nombreFuncion =(parametro1, parametro2)=>{
//     //código a ejecutar
// }

// Pueden devolver valores
// function nombreFuncion(parametro1, parametro2){
//     return parametro1+parametro2
// }

// const nombreFuncion =(parametro1, parametro2)=>parametro1+parametro2

//No puede haber 2 funciones que se llamen igual


// function saludar(){
//     console.log("Hola");
// }


// const saludarUsuario = (user) => console.log(`Hola ${user}`);


// saludarUsuario('Pepe')
// saludarUsuario('Marta')

// const suma = (num1, num2) =>{
//     if (num1==2){
//         return num1+num2
//     }
//     console.log("Esto no se va a ejecutar si entra en el if");
//     return num1
// }

// console.log(suma(2,3));

// console.log(suma(7,3));


const suma = (num1, num2)=> num1+num2

let resultado = suma(3,5)

console.log(resultado);