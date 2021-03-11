const button = document.getElementById('button')

/*
Objeto window - Es el objeto global, de él descienden todos los objetos
    alert()
    prompt()
    confirm()
    
    Estos 3 tipos de ventanas pausan la carga de la página
*/

// alert('Hi') // (o window.alert())Se suele usar para cosas rápidas, para imprimir una variable por ejemplo
// let name = prompt('Escriba su nombre')
// console.log(name);

/* if(confirm('Accept?')){
    console.log('The user accepted');
}
else{
    console.log("The user didn't accepted");
} */


/* Objeto console - Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir()
    console.error()
    console.table()
*/

// console.log(button);//Muestra la representación de un objeto en toString
// console.dir(button); // Muestra una lista de propiedades de un objeto
// console.log('error');

const person = {
    name: 'Nahuel',
    age: 20,
    email: 'nahuel@gmail.com'
}

//console.table(person);


/* Objeto location - Es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/Web/API/Location
    location.href
    location.protocol
    location.host
    location.pathname
    location.hash
    location.reload()
*/

// console.log(location.href); // Devuelve la dirección de donde se encuentra la página
// console.log(location.protocol); //Muetra el protocolo de la página, http:, https: o ftp en algunos casos
// console.log(location.host); //Muestra la localicación principal del dominio
// console.log(location.pathname);//Muestra el subdirectorio donde se encuentra el archivo
// console.log(location.hash);// Es una forma de pasar parámetros entre páginas, se puede usar para tener 1 solo HTML y en función del hash que pasemos cargar una información u otra
//location.reload() generalmente se suele poner en un if

//location.href = 'https://google.com' //Sirve para cambiar el valor de la URL


/* Objeto history
    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador

    history.back()
    history.forward()
    history.go(n|-n)

    history.length

    Trabaja con el historial de la pestaña en la que estamos navegando. No accede a todo el historial del navegador
*/

/* Objeto date
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    https://www.w3schools.com/jsref/jsref_obj_date.asp

    Para usar el objeto date, hay que instanciarlo primero.
*/
// const date = new Date()

// console.log(date.getDay());//Esto sigue el calendario anglosajón, los días y meses empiezan a contar desde 0. El 0 es domingo

// console.log(date.getDate());
// console.log(date);



/*
Timers
    Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

    setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

    Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

    setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

/* button.addEventListener('click', () => {
    setTimeout(salute,3000) // Si la función es externa, no hay que poner ()=>
    const timeout = setTimeout(() =>{
        console.log('Goodbye');
    }, 3000)//Si el código que se va a ejecutar está dentro del timeout, hay que poner ()=>
    //En el caso que quiera parar la ejecución antes que suceda habría que poner:
    clearTimeout(timeout)
}) */

/* const timeout = setTimeout(() =>{
    console.log('Goodbye');
}, 3000)

button.addEventListener('click', ()=> {
    clearTimeout(timeout)
}) */


const salute = () => {
    console.log("Hi");
}

let cont = 0;

//const interval = setInterval(salute, 3000);

const interval = setInterval(()=>{
    console.log(cont);
    cont++
}, 3000)

button.addEventListener('click', ()=> {
    clearTimeout(interval)
})