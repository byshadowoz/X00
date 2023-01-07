<<<<<<< HEAD
function Suma() {
   const SumaTotal = zar.reduce((acumulador, valorActual) => acumulador + valorActual);;
   console.log(SumaTotal)
}

const zar = document.getElementById('#ROBLOX')
const sumarbtn = document.getElementById('#sumar')
const arraynumbers = []
const versuma = document.getElementById('#mostrarsuma')

sumarbtn.addEventListener('click', function(){
   arraynumbers.push(zar.value);
   let total = arraynumbers.Suma()
   versuma.innerHTML = total;
})
=======
function Hola (var1, var2) {
   if(var1 >= var2){
      console.log("Hola")
   }else{
      console.error("aloH")
   }
}
Hola(67, 500);
>>>>>>> 858b9e47f2e4a3f7d81cf6b81265209638777df1
