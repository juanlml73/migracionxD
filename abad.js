const prompt = require('prompt-sync')();
var recibeNumero;
var suma = 0;
do{
    //Recibimos un texto, que serán los números a sumar
    recibeNumero = prompt("Dame un número: ");
    //Convertimos a enteros los números recibidos
    suma = suma + parseInt(recibeNumero);
//Si el valor es igual a 0, se dentendrá el ciclo
}while( recibeNumero != 0 );
//Imprimimos en pantalla el resultado final
console.log( "La suma total es: " + suma)