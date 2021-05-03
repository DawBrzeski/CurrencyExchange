{
    const EURPLN = 4.57;
    const USDPLN = 3.82;
    const GBPPLN = 5.24;

    const calculateResult = (baseCurrency, futureCurrency, currencyFrom) => {


        const EURUSD = (EURPLN / USDPLN).toFixed(2);
        const EURGBP = (EURPLN / GBPPLN).toFixed(2);
        const USDEUR = (USDPLN / EURPLN).toFixed(2);
        const USDGBP = (USDPLN / GBPPLN).toFixed(2);
        const GBPEUR = (GBPPLN / EURPLN).toFixed(2);
        const GBPUSD = (GBPPLN / USDPLN).toFixed(2);
        const PLNEUR = (1 / EURPLN).toFixed(2);
        const PLNUSD = (1 / USDPLN).toFixed(2);
        const PLNGBP = (1 / GBPPLN).toFixed(2);




        if (baseCurrency === "pln" && futureCurrency === "eur") {
            return result = currencyFrom * PLNEUR;
        } else if (baseCurrency === "pln" && futureCurrency === "usd") {
            return result = currencyFrom * PLNUSD;
        } else if (baseCurrency === "pln" && futureCurrency === "gbp") {
            return result = currencyFrom * PLNGBP;
        } else if (baseCurrency === "pln" && futureCurrency === "pln") {
            return result = currencyFrom;
        } else if (baseCurrency === "eur" && futureCurrency === "pln") {
            return result = currencyFrom * EURPLN;
        } else if (baseCurrency === "eur" && futureCurrency === "eur") {
            return result = currencyFrom;
        } else if (baseCurrency === "eur" && futureCurrency === "usd") {
            return result = currencyFrom * EURUSD;
        } else if (baseCurrency === "eur" && futureCurrency === "gbp") {
            return result = currencyFrom * EURGBP;
        } else if (baseCurrency === "usd" && futureCurrency === "pln") {
            return result = currencyFrom * USDPLN;
        }
        else if (baseCurrency === "usd" && futureCurrency === "usd") {
            return result = currencyFrom;
        } else if (baseCurrency === "usd" && futureCurrency === "eur") {
            return result = currencyFrom * USDEUR;
        }
        else if (baseCurrency === "usd" && futureCurrency === "gbp") {
            return result = currencyFrom * USDGBP;
        }
        else if (baseCurrency === "gbp" && futureCurrency === "pln") {
            return result = currencyFrom * GBPPLN;
        } else if (baseCurrency === "gbp" && futureCurrency === "eur") {
            return result = currencyFrom * GBPEUR;
        } else if (baseCurrency === "gbp" && futureCurrency === "usd") {
            return result = currencyFrom * GBPUSD;
        } else if (baseCurrency === "gbp" && futureCurrency === "gbp") {
            return result = currencyFrom;
        }

    };

    const ratesUpdate = () => {
        const currencyEUR = document.querySelector(".js-currencyEUR");
        const currencyGBP = document.querySelector(".js-currencyGBP");
        const currencyUSD = document.querySelector(".js-currencyUSD");

        currencyEUR.innerText = EURPLN;
        currencyUSD.innerText = USDPLN;
        currencyGBP.innerText = GBPPLN;
    };
    ratesUpdate();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const valueToElement = document.querySelector(".js-valueTo")

        const valueFromElement = document.querySelector(".js-valueFrom");
        const baseCurrencyElement = document.querySelector(".js-baseCurrency");
        const futureCurrencyElement = document.querySelector(".js-futureCurrency");
        const baseCurrency = baseCurrencyElement.value;
        const currencyFrom = +valueFromElement.value;
        const futureCurrency = futureCurrencyElement.value;


        let result = calculateResult(baseCurrency, futureCurrency, currencyFrom);

        valueToElement.value = result.toFixed(2);
        updateResultText(currencyFrom, baseCurrency, result, futureCurrency);

    };

    const updateResultText = (currencyFrom, baseCurrency, result, futureCurrency) => {
        const textResult = document.querySelector(".textResult")
        textResult.innerText = ` Za ${currencyFrom.toFixed(2)} ${baseCurrency.toUpperCase()} dostaniesz ${+result.toFixed(2)} ${futureCurrency.toUpperCase()}`;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

        const reset = document.querySelector(".js-reset");
        reset.addEventListener("click", () => {
            const textResult = document.querySelector(".textResult")
            textResult.innerText = "N/A";
        });


    };
    init();

}