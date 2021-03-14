//API Usada: JSONPlaceHolder

const button = document.getElementById('button')


button.addEventListener('click',() => {
    //Lo primero que hay que hacer es crear el objeto donde se guarda la respuesta. El objeto por convención se llama xhr.
    let xhr 
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP") //Esta sentencia es por cuestiones de compatibilidad con internet explorer(antes de la versión 11)
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')//Este metodo recibe 2 parámetros, el primero es el metodo que se va a utilizar para hacer la petición (GET/POST/PUT/DELETE). Si se hace a través de GET, hay que poner los codigos hay que ponerlos dentro de la url a la que se hace la petición. Y si es por POST, hay que crear un objeto donde se guarda esa información. Una vez que se tiene esto, hay que enviar la petición. (En este punto se está abriendo la conexión)

    xhr.addEventListener('load', (e) =>{
        const dataJSON = JSON.parse(e.target.response);
        
        const list = document.getElementById('list')
        for(const userInfo of dataJSON){
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            list.appendChild(listItem)
        }
    })//El evento load se dispara cuando toda la información llegó al objeto. Una vez que está completo tenemos que guardar esa información en una variable.
    //Esto lo que devuelve es un string, asi que hay que convertirlo en un objeto con JSON.parse()


    xhr.send()//En este punto se está enviando la conexión. Pero no le estamos diciendo que hacer con los datos, (Tiene que ir antes del send, es decir, antes de enviarlo, tenemos que decir que se quiere hacer con los datos)
})