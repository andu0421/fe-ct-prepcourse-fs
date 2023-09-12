/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   var cadena = string; 
   return cadena
}
// ⛔️ "X" e "Y" son números.
console.log(devolverString("'X' e 'Y' son números."));

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var su1 = x;
   var su2 = y;
   return su1 + su2;
}
console.log(suma(71,87))

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var a1 = x;
   var a2 = y;
   return a1 - a2;
}
var resultado = resta(8,3);
console.log (resultado)

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var d1 = x;
   var d2 = y;
   return d1 / d2;
}
console.log(divide(8,5))

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var mul1 = x;
   var mul2 = y;
   return mul1 * mul2;
}
console.log(multiplica(4,8))


function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var mod1 = x;
   var mod2 = y;
   return mod1 % mod2;
}
console.log(obtenerResto(18,5))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
