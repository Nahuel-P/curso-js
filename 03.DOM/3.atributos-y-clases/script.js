/* 
Atributos
    element.getAttribute('attribute')
    element.setAttribute('attribute', value)

Clases
    element.classList.add('class','class',...)
    element.classList.remove('class','class',...)
    element.classList.contains('class')
    element.classList.replace('oldClass', newClass)
    
    element.classList.toggle('class'[,force])
atributos directos
    id
    value
*/


const title = document.getElementById('title')
const name = document.getElementById('name')


// console.log(name.getAttribute('type')); // Esto nos devuelve el atributo
//name.setAttribute('type', 'date') //Modificar el valor del atributo

// title.classList.add('main-title', 'another-title')//Agrega una clase nueva

// title.classList.remove('main-title') //Borra la clase que se le indica
// title.classList.remove('clase-que-no-existe')//No hace nada ya que no existe la clase


// title.classList.contains('main-title')//Verifica si existe la clase que recibe


// if(title.classList.contains('title')) console.log('Title tiene la clase title');
// else console.log('Title no tiene la clase title');

// title.classList.replace('title', 'main-title')

// console.log(title);
// console.log(name);

// console.log(title.innerHTML); // Agarra las etiquetas HTML del elemento
// console.log(title.textContent); //Agarra el texto plano tal cual, sin etiquetas

console.log(name.value.length); //No hay que evaluar el ID de la etiqueta para validar formularios, hay que validar el valor.