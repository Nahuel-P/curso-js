/*
document.getElementById('id') - Acceder a un elemento a través de su id 

document | element.querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS (Puede descender del documento o del elemento)

document | element.querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList (Puede descender del documento o del elemento)*/


const title = document.getElementById('title')

 //textContent es una propiedad que permite leer o editar.

console.log(title.textContent); //leer

// title.textContent = 'DOM - Accediendo a nodos'//editar


 //querySelector
 const paragraph = document.querySelector('.paragraph:first-child') //Es importante poner el . antes del nombre de la clase ya que es un selector CSS. Se pueden usar pseudoclases como nth-child, pero ::after y ::before no de esta forma

 console.log(paragraph);

//Accediendo desde elementos
 const span = paragraph.querySelector('span')

 console.log(span.textContent);



 const spanTitle = document.getElementById('title').querySelector("span");

console.log(spanTitle.textContent);



//querySelectorAll
const paragraphAll = document.querySelectorAll('.paragraph')
const paragraphAllSpread = [...document.querySelectorAll('.paragraph')] // El problema de spread operator que 
const paragraphAllArray = Array.from(document.querySelectorAll('.paragraph'))

paragraphAll[0].style.color = 'red' //No se da estilos de esta manera, es para demostración


//No es un array, es un nodelist, en un nodelist el .map no existe
// paragraphAll.map(p=>p.style.color='green')
// console.log(paragraphAll);

//paragraphAllSpread.map(p=>p.style.color='green')

paragraphAllSpread.map(p=>p.style.color='blue')


