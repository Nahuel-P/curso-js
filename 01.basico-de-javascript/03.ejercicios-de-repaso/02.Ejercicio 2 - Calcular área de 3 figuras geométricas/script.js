// 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
//     triángulo = b * h/2
//     rectángulo = b * h
//     círculo = π * r2 (pi * radio al cuadrado)

let figura= prompt("Ingrese la figura que quiere calcular el área. (No ingrese tildes ni espacios) \n Triángulo \n Rectángulo \n Círculo").toLowerCase()

let base;
let altura;
let radio;
let area;

switch(figura){
    case 'triangulo':
        base=prompt("Introduce la base del triangulo")
        altura=prompt("Introduce la altura del triangulo")
        area = (base * altura)/ 2;
        console.log(`El area del triangulo es ${area}`)
        break
    case 'rectangulo':
        base=prompt("Introduce la base del rectangulo")
        altura=prompt("Introduce la altura del rectangulo")
        area = base * altura;
        console.log(`El area del rectangulo es ${area}`)
        break
    case 'circulo':
        radio=prompt("Introduce el radio del circulo")
        area =  Math.PI * Math.pow(radio, 2) ;
        console.log(`El area del circulo es ${area}`)
        break
    default: console.log('La figura geometrica no es válida')
    }
