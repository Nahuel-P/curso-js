//Un callback es una función que se ejecuta a través de otra función
//Los callbacks no son asincronos. Se ejecutan por orden

/* const getUser = (id, cb) =>{
    const user = {
        name: 'Nahuel',
        id: id // o puede ser solamente 'id' ya que el parametro se llama igual que el valor del objeto
    }

    //cb(null, user)
    if (id==2) cb("User doesn't exist")
    else cb(null,user)
}


getUser(1, (err, user)=>{ //Esta función que es el 2do parámetro, es la función que se va a ejecutar en getUser
    if(err) return console.log(err);//El error que recibe por parámetro la función, se imprime acá
    console.log(`User name is ${user.name}`);//En caso contrario, se imprime el usuario con su nombre
}) */

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

const getUser = (id, cb)=>{
    const user = users.find(user=>user.id==id)
    if(!user) cb(`Doesn't exist a user with id ${id}`)
    else cb(null, user)
}


const getEmail = (user, cb) =>{
    const email = emails.find(email=>email.id == user.id)
    if(!email) cb(`${user.name} doesn't have an email`)
    else cb(null, {
        id:user.id,
        name: user.name,
        email: email.email
    })
}




/* getUser(1, (err, user)=>{
    if(err) return console.log(err);
    console.log(user); //No es necesario el else ya que el return finaliza la ejecución de la función
}) */



getUser(3, (err, user)=>{
    if(err) return console.log(err);
    getEmail(user, (err, res)=>{
        if(err) return console.log(err);
        console.log(res);
    })
})//Esto a futuro se puede complicar y es dificil de mantener, puede aparecer un callback hell. Para evitar esto, se usan las promesas