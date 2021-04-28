//Obecne kursy walut 
let EURPLN = 4.57;
let USDPLN = 3.82;
let GBPPLN = 5.24;
//Inne kursy walut 
let EURUSD = (EURPLN / USDPLN).toFixed(2);
let EURGBP = (EURPLN / GBPPLN).toFixed(2);

let USDEUR = (USDPLN / EURPLN).toFixed(2);
let USDGBP = (USDPLN / GBPPLN).toFixed(2);

let GBPEUR = (GBPPLN / EURPLN).toFixed(2);
let GBPUSD = (GBPPLN / USDPLN).toFixed(2);

let PLNEUR = (1 / EURPLN).toFixed(2);
let PLNUSD = (1 / USDPLN).toFixed(2);
let PLNGBP = (1 / GBPPLN).toFixed(2);
//

let currencyEUR = document.querySelector(".js-currencyEUR");
let currencyGBP = document.querySelector(".js-currencyGBP");
let currencyUSD = document.querySelector(".js-currencyUSD");

currencyEUR.innerText = EURPLN;
currencyUSD.innerText = USDPLN;
currencyGBP.innerText = GBPPLN;

/// Dla danych wyborów oblicz dana walute:


let formElement = document.querySelector(".js-form");
let baseCurrencyElement = document.querySelector(".js-baseCurrency");
let valueFromElement = document.querySelector(".js-valueFrom");

let futureCurrencyElement = document.querySelector(".js-futureCurrency");
let valueToElement = document.querySelector(".js-valueTo")
let textResult = document.querySelector(".textResult");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let baseCurrency = baseCurrencyElement.value;
    let currencyFrom = +valueFromElement.value;
    let futureCurrency = futureCurrencyElement.value;
    let result = 0;

    if (baseCurrency === "pln" && futureCurrency === "eur") {
        result = currencyFrom * PLNEUR;
    } else if (baseCurrency === "pln" && futureCurrency === "usd") {
        result = currencyFrom * PLNUSD;
    } else if (baseCurrency === "pln" && futureCurrency === "gbp") {
        result = currencyFrom * PLNGBP;
    } else if (baseCurrency === "pln" && futureCurrency === "pln") {
        result = currencyFrom;
    } else if (baseCurrency === "eur" && futureCurrency === "pln") {
        result = currencyFrom * EURPLN;
    } else if (baseCurrency === "eur" && futureCurrency === "eur") {
        result = currencyFrom;
    } else if (baseCurrency === "eur" && futureCurrency === "usd") {
        result = currencyFrom * EURUSD;
    } else if (baseCurrency === "eur" && futureCurrency === "gbp") {
        result = currencyFrom * EURGBP;
    } else if (baseCurrency === "usd" && futureCurrency === "pln") {
        result = currencyFrom * USDPLN;
    }
    else if (baseCurrency === "usd" && futureCurrency === "usd") {
        result = currencyFrom;
    } else if (baseCurrency === "usd" && futureCurrency === "eur") {
        result = currencyFrom * USDEUR;
    }
    else if (baseCurrency === "usd" && futureCurrency === "gbp") {
        result = currencyFrom * USDGBP;
    }
    else if (baseCurrency === "gbp" && futureCurrency === "pln") {
        result = currencyFrom * GBPPLN;
    } else if (baseCurrency === "gbp" && futureCurrency === "eur") {
        result = currencyFrom * GBPEUR;
    } else if (baseCurrency === "gbp" && futureCurrency === "usd") {
        result = currencyFrom * GBPUSD;
    } else if (baseCurrency === "gbp" && futureCurrency === "gbp") {
        result = currencyFrom;
    }

    valueToElement.value = result.toFixed(2);
    //textResult.innerText = "Za " + currencyFrom.toFixed(2) + " " + baseCurrency.toUpperCase() + " dostaniesz " + result.toFixed(2) + " " + futureCurrency.toUpperCase(); //alternatywnie
    textResult.innerText = ` Za ${currencyFrom.toFixed(2)} ${baseCurrency.toUpperCase()} dostaniesz ${+result.toFixed(2)} ${futureCurrency.toUpperCase()}`;
});

let reset = document.querySelector(".js-reset");

reset.addEventListener("click", () => {
    textResult.innerText = "N/A";
})

