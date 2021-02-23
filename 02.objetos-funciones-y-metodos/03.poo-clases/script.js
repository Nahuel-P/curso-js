// Es un paradigma de la programación que actualiza la forma de programar anterior.

// Alguno de los conceptos fundamentales son:
// Clase
// Herencia
// Objeto
// Método
// Evento
// Etc 

// CLASES - PROPIEDADES:
// Las clases son plantillas que se usan para crear objetos iguales.

// Cuando creamos un objeto, a esa acción se le denomina instanciar un objeto

// Necesitamos una función constructora. Se tiene que llamar constructor y se ejecuta cada vez que se crea un objeto.

// Por recomendación y convención, es importante poner el nombre de la clase en mayúscula.

// class Persona{
//     constructor(nombre, apellido, edad){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//     }
// }

// this hace referencia al objeto
// nombre del objeto = nombre del parámetro
// apellido del objeto = apellido del parámetro
// edad del objeto = edad del parámetro

// Se le pueden asignar propiedades que no haya en los parametros pero siempre usando this para referenciar al objeto
// this.datos = `${nombre} ${apellido} ${edad}`

// CLASES - METODOS:
// Los objetos pueden tener funciones asociadas a él. En ese caso se les denomina METODOS
// Dentro de la clase pero FUERA del CONSTRUCTOR, se puede crear un metodo asociado al objeto.

// saludar(){
//     return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`;
// }

// CREAR OBJETOS:
// Para crear un objeto utilizando la clase o plantilla se hace con la palabra reservada new y el nombre de la clase que queremos utilizar

// const juan = new Persona('Juan', 'García', 23)

// Una vez INSTANCIADO el objeto se puede acceder a sus propiedades
// juan.nombre
// juan.apellido
// juan.edad
// juan.datos
// juan.saludar()

// ó

// juan['nombre']
// juan['apellido']
// juan['edad']
// juan['datos']
// juan['saludar']()


class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad

        this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años`
    } // Se puede poner sin el this. porque estamos dentro del constructor y existe el argumento nombre, apellido y edad
    saludar(){
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
    }
}

const juan = new Persona('Juan', 'García', 25)
const marta = new Persona('Marta', 'García', 35)



console.log(juan);

console.log(juan.saludar());
console.log(marta.saludar());