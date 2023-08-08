/*Ejercicio 1: Escribe una función que tome una cadena de
texto como parámetro y devuelva un objeto con cada
palabra de la cadena como propiedad y el número de veces
que aparece como valor */


function contarPalabras(cadena){

    const palabras = cadena.split(' ');
    const resultado = {};
    

    palabras.forEach(palabra => {
       
        resultado[palabra] = (resultado[palabra] || 0) + 1;
    });

    return resultado;
}


console.log(contarPalabras("Saludar"))
console.log(contarPalabras("Saludar"))
console.log(contarPalabras("Saludar"))

//Ejercicio 2
/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba Técnica</title>
</head>
<body>
    <button id="boton">Haz clic aquí</button>

<script>
    document.getElementById("boton").addEventListener("click", function() {
    alert("Hola desde JavaScript");
  });
</script>
    
</body>
</html>*/

// ejercicio 3
function factorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * factorial(numero - 1);
    }
  }
  
  const numero = 5;
  const resultado = factorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`); // El factorial de 5 es 120


//ejercicio 4

function ordenarPalabras(arrayDeStrings) {
    return arrayDeStrings.slice().sort();
  }
  
  const palabrasDesordenadas = ["manzana", "banana", "pera", "uva"];
  const palabrasOrdenadas = ordenarPalabras(PalabraDesordenadas);
  console.log(palabrasOrdenadas); 
  

