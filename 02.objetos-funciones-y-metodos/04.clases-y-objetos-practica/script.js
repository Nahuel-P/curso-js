// -Crea una clase Libro
// -La clase libro tendrá título, autor, año y género.
// -Crea un método que devuelva toda la información del libro
// -Pide 3 libros y guárdalos en un array
// -Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
// -Validar que los campos no se introduzcan vacíos
// -Validar que el año sea un número y que tenga 4 dígitos
// -Validar que el género sea: aventuras, terror o fantasía
// -Crea una función que muestre todos los libros
// -Crea una función que muestre los autores ordenados alfabéticamente
// Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información


class Book{
    constructor(title, author, year, genre){
        this.title = title
        this.author = author
        this.year = year
        this.genre = genre
    }
    getAuthor(){
        return this.author
    }
    getGenre(){
        return this.genre
    }
    information(){
        return `Titulo: ${this.title} \n Autor: ${this.author} \n Año: ${this.year} \n Genero: ${this.genre}`
    }
}

let books = []

while (books.length<3){
    let title = prompt('Introduce el título del libro')
    let author = prompt('Introduce el autor del libro')
    let year = prompt('Introduce el año del libro')
    let genre = prompt('Introduce el género del libro').toLowerCase()

    if(
        title !='' && 
        author !='' && 
        !isNaN(year) && 
            year.length == 4 && 
        (genre=='aventura' || genre=='terror' || genre=='fantasia')){
            books.push(new Book(title, author, year, genre))

    }
}

const showAllBooks = () => {
    console.log(books);
}

const showAuthors = () =>{
    let authors = []
    for(const book of books){
        authors.push(book.getAuthor());
    }
    console.log(authors.sort());
}

const showByGenre = () =>{
    const genre = prompt('Introduce el genero a buscar')
    for(const book of books){
        if(book.getGenre() == genre){
            console.log(book.information());
        }
    }
}


showAllBooks()
showAuthors()
showByGenre()