const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')

// input.addEventListener('keyup', () => {
//     console.log(input.value);
// } )

//El objeto evento vive siempre y cuando haya un evento. Está la opción de enviar el evento como parámetro ya que en algunos navegadores no funciona. Se puede poner como parámetro e, ev, event, el nombre que se quiere poner.

// input.addEventListener('keyup', (e) => {
//     console.log(e);
// } )

// addEventListener('click', (e)=> {
//     console.log(e);
// }) (sin window antes de addEventListener // (window.addEventListener) funciona igual ya que el evento padre/global de javascript es window.)
// Lo mismo con alert, es un metodo de window.


// input.addEventListener('keyup', (e) => {
//     console.log(e.key); // Con escribir, se ve la tecla que está tocando el usuario
// } )

// input.addEventListener('keyup', (e) => {
//     console.log(e.explicitOriginalTarget.attributes[0].nodeValue); // De esta manera se trabaja con las apis al realizar consultas generalmente
// } )

//Lo más importante del objeto evento (e) es target ya que es de los más usados. Target hace referencia al punto de donde se origina el evento

// button.addEventListener('click', (e)=> {
//     console.log(e.target);
// })



// const gallery = document.getElementById('gallery')
// //Generalmente se usa un for para agregarle a cada boton un evento. Esto consume muchos recursos del navegador, la forma más recomendada es ponerle la escucha al padre y localizar en cual de los hijos se hizo click

// gallery.addEventListener('click', (e)=>{
//     // console.log(e.target.textContent);
//     e.target.classList.add('red');
// })

const link = document.getElementById('link')

link.addEventListener('click', (e)=>{
    e.preventDefault()
    button.click() //esto puede servir para cuando necesitamos que se dispare un evento pero no queremos esperar la interacción de un usuario
})

form.addEventListener('submit', (e)=>{
    e.preventDefault() //Esto lo que hace es evitar que se ejecute el evento por defecto. En este caso el formulario no hace lo que tiene predefinido hacer 
    console.log('El formulario se ha enviado');
})


//Los eventos se pueden escuchar o se pueden forzar, es decir, se puede forzar que el elemento se dispare.

button.addEventListener('click', ()=>{
    input.value =  'Hiciste click'
})