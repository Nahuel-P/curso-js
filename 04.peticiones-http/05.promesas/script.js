//Una promesa es un objeto con 2 callbacks internos.
const users = [
    {
        id:1,
        name: 'Nahuel'
    },
    {
        id: 2,
        name: 'Laura'
    },
    {
        id:3,
        name: 'Carlos'
    }
]

const emails=[
    {
        id:1,
        email:'nahuel@gmail.com'
    },
    {
        id:2,
        email: 'laura@gmail.com'
    },
]

const getUser = (id)=>{ //Acá ya no necesitamos un callback
    const user = users.find(user=>user.id==id)
    // resolve y reject es el nombre que tienen por convención. resolve se va a ejecutar cuando todo sale bien, y reject se va a ejecutar cuando algo sale mal
    const promise = new Promise((resolve, reject)=>{
        if(!user) reject(`Doesn't exist a user with id ${id}`)
        else resolve(user)
    })
    return promise
}


const getEmail = (user) =>{
    const email = emails.find(email=>email.id == user.id)
    return promise = new Promise((resolve, reject)=>{//Se puede poner return directamente en vez de ponerlo abajo del todo
        if(!email) reject(`${user.name} doesn't have an email`)
        else resolve({
            id:user.id,
            name: user.name,
            email: email.email
        })
    })

}

getUser(1) //Ya no se precisa la función de callback como antes. No pasa nada porque lo que estamos devolviendo es una promesa
console.log(getUser(1));
//Para leer el contenido de las promesas, hay metodos para leer ese contenido ( ya que todo está encapsulado)
//En el caso que vaya bien, se usa el metodo .then()

getUser(3)
    .then(user=> {
        return getEmail(user)//getEmail solo no va a devolver nada, ya que es una promesa, hay que poner un .then después del .then
    })//Accede al valor encapsulado (el elemento <value>)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))// Maneja el error de la primer promesa y la segunda, es decir, maneja cualquier error que se encuentre