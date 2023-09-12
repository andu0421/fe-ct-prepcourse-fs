/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   var num = x;
   var num2 = y;
   if(num === num2){
      return true;
   }else{
      return false
   }
}
console.log(sonIguales(3,3))

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   var str1 = str1; 
   var str2 = str2;
   if(str1.length === str2.length){
   return true;
   }
   else{
      return false
   }
  
}
console.log(tienenMismaLongitud("gato","gato"));



function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   var numero = 90;
   return num < numero
}
console.log(menosQueNoventa(58))

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   var numero = 50;
   return num > numero
}
console.log(mayorQueCincuenta(100))

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 2 ==0){
      return true
   }else{ return false}
}

console.log(esPar(10))

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 2 != 0){
      return true
   }else{ return false}
}
console.log(esImpar(9))


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
