// Es toda la estructura HTML del documento.
// NO es JavaScript, es una API (Aplication Programming Interface)

// Se representa en forma de arbol la forma de representar el dom ó como js representa el dom


// NODOS:
// Cada parte del arbol del documento es un NODO
// Hay varios tipos de nodos (12), los más utilizados son:
// Element node - 1 (Cualquier etiqueta HTML)
// Text node - 3 (El contenido de la etiqueta)
// Comment node - 8 (Cualquier comentario HTML)

En el navegador, primero se selecciona desde el inspector el elemento, luego se va a la consola, escribimos $0 y apretamos enter, se muestra todo el contenido que tiene ese elemento. Se puede acceder como si fuera un elemento. Solo funciona en el navegador


Escribo lo que escribí en el navegador
//Seleccionando el h1
>>$0.id
<- "title"

>>$0.textContent
<-"DOM Document Object Model"

>>$0.nodeName
<-"H1" //Es case sensitive, tiene que estar en mayúsculas en caso que querramos acceder al elemento a través de la etiqueta

//Busco en h1 el nodo de texto. La forma de acceder al nodo de texto es como si fuera un array. Se comporta como si fuera un array, pero no lo es
>>$0.childNodes[0].nodeType
<-3

//Seleccionando el <p> comentado
>>$0.nodeType 
<-8 //Devuelve 8 porque es un nodo de tipo comentario