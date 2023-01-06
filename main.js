function sumaTotal(array) {
   const SumaTotal = array.reduce((acumulador, valorActual) => acumulador + valorActual);;
   console.log(SumaTotal)
}
sumaTotal([34,34,64,642,1213])