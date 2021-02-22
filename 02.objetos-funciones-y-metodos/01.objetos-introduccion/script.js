// Los objetos son estructuras de datos que representan propiedades, valores y acciones que puede realizar un objeto

// Todos los objetos tienen propiedades o atributos y comportamientos o acciones representados por pares de clave (key):valor(value)

// const person = {
//     name: 'Juan',
//     age: 26,
//     sons: ['Laura', 'Diego']
// }

// Para acceder a las propiedades y acciones del objeto se utiliza la nomenclatura del punto

// console.log(person.name);
// console.log(person.age);
// console.log(person.sons[0]);
// console.log(person.sons[1]);

// Para imprimir las claves de un objeto se haría de la siguiente manera:
// for (const key in person){
//     console.log(key);
// }

// Para imprimir los valores de esas claves se hace de siguiente manera:

// for (const key in person){
//     console.log(person[key]);
// }

// objetos y arrays son cosas distintas, no funcionan de la misma manera.


 const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Jorge']
}

// console.log(person.name);

// console.log(person['name']);

// for (const key in person){
//     console.log(key);
// } //esto es para acceder a las claves del objeto


// for (const key in person){
//     console.log(person[key]);
// }//esto es para acceder los valores del objeto

// for(const son of person.sons){
//     console.log(son);
// }//Para recorrer el array dentro de un objeto

console.log(`Hola ${person.name}. Tenés ${person.age} años y tus hijos se llaman ${person.sons.join(', ')}`);