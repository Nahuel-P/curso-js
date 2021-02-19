/*Los temas abarcados anteriormente  son:
1-Sintaxis y tipos de datos
2-Tipos de operadores
3-Strings
4-Objeto Math
5-Condicionales I
6-Condicional switch
7-Operador ternario
8- Arrays
9-Bucle while y do while */

/* 
    Bucles determinados
    bucle for
    Su sintaxis se compone de 3 partes
        Iniciación de variable
        Número de vueltas
        Incremento o decremento
    for(let i=0;i<=10;i++){
        Código a ejecutar
    }
*/

let numbers = [1,32,53,54,932,15]

for(let i=0;i<=numbers.length;i++){
    console.log(`i vale ${i} y el valor de esa posición en el array es ${numbers[i]}`);
}

/*Si se pone <= va a ser undefinded ya que el mayor indice es 5 (ya que en un array se cuenta desde 0) */