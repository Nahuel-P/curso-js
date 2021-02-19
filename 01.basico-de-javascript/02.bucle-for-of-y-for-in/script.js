/* Bucles determinados
bucle for of / for in 

 for(let variable of estructura){
        Código a ejecutar
    }
    Palabras reservadas de bucles
        break - Rompe el bucle
        continue - Se salta la(s) posicion(es) que le indequemos y después continúa su ejecución
        
Simplifica el bucle for tradicional sin tener que darle un número de vueltas ni realizar un incremento

for of sirve para que nos devuelva el valor de la posición
for in su uso habitual es para objetos, para un array normal, nos va a devolver el número del indice */

let names = ['Pepe', 'María', 'Pepita', 'Juan'];

for(let i=0; i< names.length; i++){
    if(names[i]==='Pepita'){
        continue
    }
    console.log(names[i]);
}

for(let name of names){
    if(name==='Pepita'){
        continue
    }
    console.log(name);
}

for(let index in names){
    if(names[index]==='María'){
        continue
    }
    console.log(index);
}