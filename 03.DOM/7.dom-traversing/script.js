//Recorrer el DOM (DOM Traversing) 

/* 
Padre - parent (Nodo del que desciende)
    - parentNode - Devuelve el nodo padre (que puede no ser un elemento)
    - parentElement - Devuelve el nodo elemento padre

    NOTA
    Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode y parentElement devolverá siempre null.

Hijos - child (Nodo que desciende de un padre)
    - childNodes - Devuelve todos los nodos hijos
    - children - Devuelve todos los nodos elementos hijos
    - firstChild - Devueleve el primer nodo hijo
    - firstElementChild - Devueleve el primer nodo elemento hijo
    - lastChild - Devueleve el último nodo hijo
    - lastElementChild - Devueleve el último nodo elemento hijo
    - hasChildNodes() - Devueleve true si el nodo tiene hijos y false si no tiene

Hermanos - siblings (Nodo al mismo nivel)
    - nextSibling - Devuelve el siguiente nodo hermano
    - nextElementSibling - Devuelve el siguiente nodo elemento hermano
    - previousSibling - Devuelve el anterior nodo hermano
    - previousElementSibling - Devuelve el anterior nodo elemento hermano

Cercano
    - closest(selector) - Selecciona el nodo más cercano que cumpla con el selector.
*/


//Padre
const parent = document.getElementById('parent')

//console.log(parent.parentNode);
//console.log(parent.parentElement.parentElement.parentElement); //Esta es la forma de subir niveles.

//Hijos
//console.log(parent.childNodes); //Nos devuelve un nodo que es de tipo texto por norma general y suele tener un salto de linea. Se recomienda el uso de children en vez de childNodes

//console.log(parent.children);

//console.log(parent.firstChild); // Va a aparecer un nodo tipo de texto, que es el salto de linea que se encuentra en el documento. La forma de seleccionar el primer hijo es firstElementChild

//console.log(parent.firstElementChild);

//console.log(parent.lastChild); //Salto de linea
//console.log(parent.lastElementChild);//Último elemento

//console.log(parent.hasChildNodes());//Pregunta si el elemento tiene hijos

//console.log(parent.firstChild.hasChildNodes());//Pregunta si el primer hijo tiene hijos

console.log(parent.nextSibling);
console.log(parent.parentElement.nextElementSibling); // Como parent (ul) no tiene hermanos, selecciono al padre (nav) y busco al siguiente hermano, que es la etiqueta script
console.log(parent.parentElement.previousSibling);
console.log(parent.parentElement.previousElementSibling); // selecciono al padre (nav) y busco el anterior hermano, que es h1

console.log(parent.closest('nav'));