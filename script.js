let yakitMetni = `
Gasoline : 1
LPG : 2
Diesel : 3

Please enter the number of the fuel type you want to calculate and buy.

`


let gasoline = 15.50, lpg = 7, diesel = 16.60
let calculate = document.querySelector('#calculate') 




let fuelType = Number(prompt(yakitMetni))
if (fuelType >= 0 && fuelType <= 3) {
    if (fuelType == 1) {
        let gasolineLiter = Number(prompt('Please enter how many liters of gasoline you would like to buy.'))
        if (gasolineLiter > 0 && Number ) {
            let balance = Number(prompt('Please enter your current balance.'))
            if (balance >= 0 ) {
                let gasolineBalance = gasolineLiter*gasoline
        if (balance < gasolineBalance) {
            calculate.innerHTML = `Since the total share of the gasoline you want to purchase is ${gasolineBalance} Turkish Lira and your current balance is ${balance} Turkish Lira, your purchase has been rejected due to lack of balance.`
        } else {
            calculate.innerHTML = `Since the total amount of gasoline you want to purchase is ${gasolineBalance} Turkish Lira and your current balance is ${balance} Turkish Lira, your purchase has been completed successfully.`
        }
            } else (
                calculate.innerHTML = `Please enter a valid available balance.`
            )
        } else (
            calculate.innerHTML = `Please enter a valid liter of gasoline.`
        )
    }
} else (
    calculate.innerHTML = `Please enter a valid fuel type number.`
)


if (fuelType >= 0 && fuelType <= 3) {
    if (fuelType == 2) {
        let lpgLiter = Number(prompt('Please enter how many liters of LPG you would like to purchase.'))
        if (lpgLiter > 0 && Number ) {
            let balance = Number(prompt('Please enter your current balance.'))
            if (balance >= 0) {
                let lpgBalance = lpgLiter*lpg
        if (balance < lpgBalance) {
            calculate.innerHTML = `Since the total amount of LPG you want to purchase is ${lpgBalance} Turkish Lira and your current balance is ${balance} Turkish Lira, your purchase has been rejected due to insufficient balance.`
        } else {
            calculate.innerHTML = `Since the total amount of LPG you want to purchase is ${lpgBalance} Turkish Lira and your current balance is ${balance} Turkish Lira, your purchase has been completed successfully.`
        }
            } else (
                calculate.innerHTML = `Please enter a valid available balance.`
            )
        } else (
            calculate.innerHTML = `Please enter a valid LPG liter.`
        )
    }
} else (
    calculate.innerHTML = `Please enter a valid fuel type number.`
)


if (fuelType >= 0 && fuelType <= 3) {
    if (fuelType == 3) {
        let dieselLiter = Number(prompt('Please enter how many liters of diesel you would like to buy.'))
        if (dieselLiter > 0 && Number ) {
            let balance = Number(prompt('Please enter your current balance.'))
            if (balance >= 0) {
                let dieselBalance = dieselLiter*diesel
        if (balance < dieselBalance) {
            calculate.innerHTML = `Since the total amount of diesel you want to buy is ${dieselBalance} Turkish Lira and your current balance is ${balance} Turkish Lira, your purchase has been rejected because your balance is insufficient.`
        } else {
            calculate.innerHTML = `Since the total amount of diesel you want to purchase is ${dieselBalance} Turkish Lira and your current balance is ${balance} Turkish Lira, your purchase has been completed successfully.`
        }
            } else (
                calculate.innerHTML = `Please enter a valid available balance.`
            )
        } else (
            calculate.innerHTML = `Please enter a valid diesel liter.`
        )
    }
} else (
    calculate.innerHTML = `Please enter a valid fuel type number.`
)