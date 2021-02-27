/*  Spread Operator (Operador de expansion)

Su sintaxis es "..."*/

// const numbers = [-10, 5 ,22, 32, 64, 10, 5  ]

// console.log(numbers); // Imprime el array 
// console.log(...numbers); // Acá imprime cada valor por sepadow



            //Enviar elementos de un array a una función
// const addNumbers=(a,b,c) => {
//     console.log(a+b+c);
// }

// const numbersToAdd = [1,2,3]

// addNumbers(numbersToAdd, 5, 10) // [1,2,3] va a ser a, 5 va a ser B, y 10 va a ser C, sería como sumar un array con números

// addNumbers(...numbersToAdd) // Esto expande el array y se suman los elementos del array


            //Añadir un array a otro array

// let users = ['javier', 'david', 'rosa', 'juan', 'mercedes']

// let newUsers = ['marta', 'jaime', 'laura']

// users.push(...newUsers)

// console.log(users);

            //Copiar arrays

// let array1 = [1, 2, 3, 4]
// let array2 = [...array1]
// console.log(array2);

            //Concatenar arrays

// let array1 = [1, 2, 3, 4]
// let array2 = [6, 7, 8]

// Se puede hacer de diferentes maneras la concatenación: 
// let arrayConcat = array1.concat(array2)
// console.log(arrayConcat);

// let arrayConcat = [...array1, ...array2]
// console.log(arrayConcat);

// Enviar un número indefinido de argumentos a una función (parámetros REST)

// const restParams = (...numbers) => {
//     console.log(numbers);
// }

// restParams(1,2,3,4,5,6,7,8,9,10,11,12)

            //Liberaría math


const numbers = [-10, 5 ,22, 32, 64, 10, 5  ]

console.log(Math.max(...numbers));

console.log(Math.min(...numbers));


//Eliminar elementos duplicados

console.log([...new Set(numbers)]);