// Un evento es cualquier cosa que sucede en el documento
// Hay muchos tipos de eventos, y no siempre lo ejecuta el usuario. Algunos se ejecutan con solo abrir la página, por ejemplo, que se lea el contenido del documento

// -El contenido se leyó
// -El contenido se cargó
// -El usuario mueve el mouse
// -El usuario pulsa una tecla
// -La ventana se cerró
// Y un largo etc.
// sintaxis:
// Element.addEventListener('event', callback)


/* 
Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón

Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/


const button = document.getElementById('button')
const input = document.getElementById('input')
const box = document.getElementById('box')



// button.addEventListener('click', () => {
//     console.log('CLICK');
// })

/* button.addEventListener('dblclick', ()=> {
    console.log('DOBLE CLICK');
}) */

// box.addEventListener('mouseenter', () => {
//     box.classList.replace('red', 'green')
// })

// box.addEventListener('mouseleave', () => {
//     // box.style.background="red"//Esta no es la manera correcta de cambiar los estilos de un elemento, se hace de la siguiente manera:
//     // box.classList.add('red') //Por cascada, cuando pase el mouse por el div, va a quedar verde por la especificidad de css (el elemento box sigue teniendo la clase green, asi que hay que sacarsela para que no ocurra este problema)
//     // box.classList.remove('green')
//     //Hay una manera mejor de hacer esto, y es con replace
//     box.classList.replace('green', 'red')
// })

box.addEventListener('mousedown', () => {
    console.log("Tocaste en la caja");
})

box.addEventListener('mouseup', () => {
    console.log("Soltaste el click izquierdo en la caja");
})

box.addEventListener('mousemove', () => {
    console.log("Estás moviendo el mouse en la caja");
})



input.addEventListener('keydown', ()=>{
    console.log('Estás manteniendo una tecla');
})

input.addEventListener('keyup', ()=>{
    console.log('Soltaste una tecla');
})


input.addEventListener('keypress', ()=>{
    console.log('Tocaste una tecla');
})