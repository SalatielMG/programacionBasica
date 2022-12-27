// CONDICIONALES

// if (si)
// if else (si sino)
// if else if (si sino si)

// USO: Se usa para validaciones simples (de una sola validacion)
// EJEMPLOS
let age = 20
// if (age == 18) // == sirve para validar la igualacion de dos valores 
// if (age > 18)
// if (age < 18)
// if (age >= 18)
// if (age <= 18)
if (age >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

let isStartedGame = true;

if (isStartedGame == true) {
    console.log('Partida iniciada')
} else {
    console.log('Partida no iniciada')
}

if (isStartedGame) { // isStartedGame == true
    console.log('Partida iniciada')
} else {
    console.log('Partida no iniciada')
}

// ! Significa negacion, que es dar el valor contrario
if (!isStartedGame) { // isStartedGame == false
    console.log('Partida no iniciada')
} else {
    console.log('Partida iniciada')
}

let action = ''
if (action == 'A') {

} else if (action == 'B') {

} else if (action == 'C') {

} else { // default D

}

switch (action) {
    case 'A':
        console.log('rwerwerwe')
        break;
    case 'B':
        console.log('erte')
        break;
    case 'C':
        console.log('rwerertewerwe')
        break;
    default: // D
        console.log('rtyrty')
        break;

}
// switch
// case
// break;
// default
// USO: Se usa para validacione grandes (de dos o mas validaciones)