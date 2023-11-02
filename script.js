const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueConverted = document.querySelector(".currency-value")
   
   console.log(currencySelect.value)

   const dolarToday = 5.04
   const euroToday = 5.32
   const libraToday = 6.11
   const francoToday = 5.48
   
   

    if(currencySelect.value == "USD"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
         style:"currency",
         currency:"USD"
        }).format(inputCurrencyValue / dolarToday)

    }
    if(currencySelect.value == "EUR"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
          style:"currency",
          currency:"EUR"  
        }).format(inputCurrencyValue/euroToday)
    }
    if(currencySelect.value == "LIB"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
           style:"currency",
           currency:"GBP"
           }).format(inputCurrencyValue / libraToday)   

    }
    if(currencySelect.value == "CHF"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-CH",{
           style:"currency",
           currency:"CHF"
           }).format(inputCurrencyValue / francoToday)   

    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency:"BRL"
    }).format(inputCurrencyValue)
} 
    
  
  function changeCurrency() {
      const currencyName = document.getElementById('currency-name')
      const currencyImage = document.querySelector('.currency-img')

    if (currencySelect.value == "USD") {
        currencyName.innerHTML = 'Dolar americano'
        currencyImage.src = './assets/dolar.png'
    }     

    if (currencySelect.value == "EUR"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = './assets/euro.png'
    }

    if (currencySelect.value == "LIB"){
        currencyName.innerHTML = 'Libra Esterlina'
        currencyImage.src = './assets/libra .png'
    }

    if (currencySelect.value == "CHF"){
        currencyName.innerHTML = 'Franco Suiço'
        currencyImage.src = './assets/franco1.png'
    }

    convertValues()
}
 


currencySelect.addEventListener('change',changeCurrency )
convertButton.addEventListener('click',convertValues) 
