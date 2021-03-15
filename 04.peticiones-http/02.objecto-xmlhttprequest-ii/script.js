const form = document.getElementById('form')
const characters = document.getElementById('characters')
const table = document.getElementById('table')


form.addEventListener('submit', (e)=>{
    e.preventDefault() 
    getData(characters.children[characters.selectedIndex].value); //Si se hace characters.selectedIndex, nos devuelve el indice del que está seleccionado, no hay que confundirlo con el value que tiene el elemento. 
    
})

const getData = (id) => { //Esto recibe un parámetro, que recibe el id que se está buscando
    let xhr = new XMLHttpRequest()

    if(id==undefined){ // Se pregunta si id es undefined significa que no se está haciendo una solicitud, sino que se está cargando la página por primera vez
        xhr.open('GET', 'marvel.php') //Acá se dice como se hace la petición, a través de GET, y luego, el archivo al que se hace la petición

        xhr.addEventListener('load', (data)=>{ //Acá se escucha la respuesta para saber que los datos ya los tenemos
            const dataJSON = JSON.parse(data.target.response) //Convertimos los datos a JSON
            console.log(dataJSON); 
        

        const fragment = document.createDocumentFragment() //Creamos el fragmento de código para rellenar el select del html

        for(const heroes of dataJSON){
            const option = document.createElement('OPTION') //Creamos un option para meterlo en el select
            option.setAttribute('value', heroes.ID) // A la base de datos le tenemos que mandar heroes.ID para que sepa que id se está buscando. El value se lo tenemos que asignar a cada vuelta de bucle
            option.textContent = heroes.Name //Rellenamos la etiqueta option con el nombre del heroe
            fragment.appendChild(option) //Agregamos lo anterior en el fragmento de código
        }
        characters.appendChild(fragment) // Dentro del select (con id characters), se agrega el fragmento de código
    })
    }
    else{
        xhr.open('GET', `marvel.php?id=${id}`) // No es igual que el if anterior, acá se necesita recibir el id que estamos pasando. La forma de pasar parámetros por get es con '?' todo lo que va después de la interrogación, es como los objetos clave=valor

        xhr.addEventListener('load', (data)=>{
            const dataJSON = JSON.parse(data.target.response)
            console.log(dataJSON);
        

        const fragment = document.createDocumentFragment()

        for(const heroe of dataJSON){//Acá se cambia el bucle
            const row = document.createElement('TR') //Se crea el TR para la fila
            const dataName = document.createElement('TD') //Se crea el TD para la información, lo mismo se repite por cada dato de las columnas.
            const dataAlignment = document.createElement('TD')
            const dataHomeTown = document.createElement('TD')
            const dataGender = document.createElement('TD')
            const dataFighting = document.createElement('TD')
            dataName.textContent = heroe.Name //El contenido de dataName va a ser consultado de la base de datos, de la tabla heroe, se consulta el nombre (Name), y así con los siguientes datos.
            dataAlignment.textContent = heroe.Alignment
            dataHomeTown.textContent = heroe.Hometown
            dataGender.textContent = heroe.Gender
            dataFighting.textContent = heroe.Fighting_Skills

            row.append(dataName) //Acá se agrega a la fila cada uno de los elementos.
            row.append(dataAlignment)
            row.append(dataHomeTown)
            row.append(dataGender)
            row.append(dataFighting)

            fragment.append(row) //Acá en vez de option va a ser un row, porque lo que vamos a agregar no es un option, es una fila
        }
        if(table.children[1]){
        table.removeChild(table.children[1])
        }
        table.append(fragment) // Se meten los datos en la tabla
    })
    }

    xhr.send()
}

getData()