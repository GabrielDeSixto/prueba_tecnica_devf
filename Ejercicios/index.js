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