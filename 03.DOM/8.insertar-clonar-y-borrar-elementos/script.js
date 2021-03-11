/*
Insertar y eliminar elementos II

    parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento de referencia

    SOPORTE TOTAL
    parent.insertAdjacentElement(position, element)

    parent.insertAdjacentHTML(position, HTML)
    parent.insertAdjacentText(position, text)

    positions: 
        beforebegin - Antes de que empiece (hermano anterior)
        afterbegin - después de que empiece (primer hijo)
        beforeend - antes de que acabe (último hijo)
        afterend - después de que acabe (hermano siguiente)

    parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/

const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = 'New element'

//list.appendChild(newElement)//Siempre se coloca en el último lugar indepdendientemente del numero de hijos que haya. Para eso se usa insertBefore

//list.insertBefore(newElement, list.children[1])

// list.children[0].insertAdjacentElement('beforebegin', newElement) //Si no referenciamos al hijo, estaría fuera de la lista ya que se coloca antes de que empiece el padre
// list.insertAdjacentElement('afterbegin', newElement)//Acá no hace falta referenciar al hijo ya que el elemento nuevo se coloca después de que empieza el elemento padre
// list.insertAdjacentElement('beforeend', newElement)// Lo coloca como último hijo ya que lo coloca antes que termine el elemento
//list.children[0].insertAdjacentElement('afterend', newElement)//Acá tenemos que referenciar al hijo ya que se coloca después de que termine el elemento. Hay que tener cuidado ya que en caso que se ponga una posición que no exista, el elemento no va a aparecer

//adjacentHTML y adjacentText funcionan exactamente igual que adjacentElement
// list.children[1].insertAdjacentHTML('afterend', '<li>Element with HTML</li>')
// list.children[1].insertAdjacentText('afterend', '<li>Element with HTML</li>') // No es algo que se vea muy habitualmente


//REEMPLAZANDO UN HIJO CON OTRO

//list.replaceChild(newElement, list.children[0])


/*
    DOM manipulation convenience methods - JQuery Like
    https://caniuse.com/#search=jQuery-like

    positions:
        parent.before() - Antes de que empiece (hermano anterior)
        parent.prepend() - después de que empiece (primer hijo)
        parent.append() - antes de que acabe (último hijo)
        parent.after() - después de que acabe (hermano siguiente) 

        child.replaceWith(newChild)
*/

//list.children[0].before(newElement) //Va a pasar lo mismo que pasaba con insertAdjacentElement('beforebegin', newElement), entonces referenciamos al hijo
//list.prepend(newElement)//Primer elemento
//list.append(newElement)//Se coloca antes que acabe el elemento
//list.children[1].after(newElement)



//document.getElementById('child-to-replace').replaceWith(newElement)


/*
    Clonar y eliminar elementos
        element.cloneNode(true|false) - Clona el nodo. Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin hijos

        element.remove() - Elimina el nodo del DOM
        element.removeChild(child) - Elimina el nodo hijo del DOM
*/

//console.log(list.cloneNode(true));//No es el UL del html, es una copia de ese UL

//list.after(list.cloneNode(true))

//list.remove()

list.removeChild(list.children[0])
list.children[0].remove()