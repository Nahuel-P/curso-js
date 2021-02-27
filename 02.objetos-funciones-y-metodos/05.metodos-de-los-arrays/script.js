/* 
Arrays - Métodos II

.from(iterable) - Convierte en array el elemento iterable

.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.

.forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.

.some(callback) - Comprueba si al menos un elemento del array cumple la condición

.every(callback) - Comprueba si todos los elementos del array cumplen la condición

.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array

.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array

.reduce(callback) - Reduce todos los elementos del array a un único valor
*/


                    //___FROM/SPLIT___
// let word = 'Hola mundo'

// console.log(Array.from(word));
// console.log(word.split(" "));

// callback es una función que la está ejecutando otra función

                    //___SORT___
// const letters = ['k', 'r', 'd', 'a', 'h', 'w']

// console.log(letters);
// console.log(letters.sort());

//No funciona de igual manera con los números, le tenemos que pasar el algoritmo que ordene de menor a mayor
// const numbers = [1,5, 128, 300, 3]
// console.log(numbers);
// console.log(numbers.sort((a,b)=> a-b));//De menor a mayor
// console.log(numbers.sort((a,b)=> b-a))//De mayor a menor

/* Ejemplo función sort
function menorMayor(a, b) {
if (a-b < 0) return -1;
if (a-b > 0) return 1;
if(a == b) return 0;
}

function mayorMenor(a, b) {
if (b-a < 0) return -1;
if (b-a > 0) return 1;
if(b == a) return 0;
}  */


                    //___forEach____
// const numbers = [5, 15, 23, 32, 64, 93]

// numbers.forEach((number)=> console.log(number))


// numbers.forEach((number, index)=>
//     console.log(`${number} está en la posición ${index}`))


                    //___some//every___

// const words = ['HTML', 'CSS', 'JavaScript', 'React']

// console.log(words.some(word => word.length > 10));//Si alguno cumple la condición

// console.log(words.every(word => word.length > 2)); // Si todos cumplen la condición


                    //___map____
// const numbers = [5, 15, 23, 32, 64, 93]

// numbers.map((number) => console.log(number*2))

// es exactamente lo mismo que: 
// for (const number of numbers){
//     console.log(number*2);
// }

// si lo queremos guardar en un array sería:

// const arrayNumbers = numbers.map(number => number *2)
// console.log(arrayNumbers);

                    //__filter__

// const numbers = [5, 15, 23, 32, 64, 93]

// const arrayNumbers2 = numbers.filter(number => number>40)

// console.log(arrayNumbers2);

                    //__reduce__

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.reduce((a,b)=> a+b)) // Devuelve un único valor

//Ejemplo práctico

const users = [
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: false
    },
    {
        name: 'user 4',
        online: false
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    }
]

const usersOnline = users.reduce((cont, user)=>{
    if(user.online) cont++
    return cont
}, 0) // al poner una , después de la llave, se le puede dar el valor inicial a cont

console.log(`Hay ${usersOnline} usuarios conectados`);