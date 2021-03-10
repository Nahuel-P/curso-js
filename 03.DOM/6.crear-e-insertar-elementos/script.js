// DOM - Crear e insertar elementos

/*
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textcontent = texto
Escribir HTML en un elemento: element.innetHTML = código HTML

Añadir un elemento al DOM: parent.appendChild(element) //siempre que se quiere meter un elemento, ese elemento tiene que ser hijo de alguien. Por ejemplo, si se quiere insertar un H1, tiene que ser hijo de body. Entonces quedaría body.appendChild

Fragmentos de código: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 'Valor extra']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')


// Cuando se quiere crear un elemento es lo mismo que crear una etiqueta. Y la etiqueta se crea en el documento, por eso el metodo createElement siempre tiene que estar precedido de element, ya que es el sitio donde vamos a crear el elemento.

//Crear un elemento
const itemList = document.createElement('LI')
//Escribir texto en un elemento:
itemList.textContent = 'Lunes'

//console.log(itemList);

//Añadir un elemento al DOM
daysList.appendChild(itemList)


//Insertar etiquetas HTML
//title.textContent = 'DOM - <span>Crear e insertar elementos I</span>' // Si ponemos acá, aparecen las etiquetas porque las trata como texto, textContent trata todo lo que se le asigne como texto. Para insertar html se usa innetHTML

title.innerHTML = 'DOM - <span>Crear e insertar elementos I</span>'

//Escribir la lista de días en el documento
//Hay que recorrer el array

/* for (const day of days){
    daysList.innerHTML+= `<li>${day}</li>`
} *///Lo que se hace generalmente es esto. El problema es que a cada vuelta de bucle, se está inyectando código HTML en el DOM, cada vez que se inserta un elemento, el DOM redibuja el arbol de nodos entero

//Para evitar de que el navegador se sobrecargue al hacer este tipo de operaciones, se usa document.createDocumentFragment()

// Lo primero es crear el fragmento de código (es una variable o un contenedor donde se va a escribir todo el html que se va a inyectar en el documento). Una vez que se tiene ese HTML lo que se hace es inyectar solo UNA Vez todo el código de golpe

const fragment = document.createDocumentFragment()
/* 
for (const day of days){
    const itemList = document.createElement('LI')
    itemList.textContent = day
    fragment.appendChild(itemList)
}

daysList.appendChild(fragment)
 */

for(const day of days){
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', day.toLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}

selectDays.appendChild(fragment)