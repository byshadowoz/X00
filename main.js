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