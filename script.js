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
            calculate.innerHTML = `Satın almak istediğiniz gasolinein toplam tutarı ${gasolineBalance} Türk Lirası iken sizin güncel balanceniz ise ${balance} Türk Lirası olduğundan ötürü satın alma işleminiz balance yetersizliğinden reddedilmiştir.`
        } else {
            calculate.innerHTML = `Satın almak istediğiniz gasolinein toplam tutarı ${gasolineBalance} Türk Lirası iken sizin güncel balanceniz ise ${balance} Türk Lirası olduğundan ötürü satın alma işleminiz başarıyla gerçekleştirilmiştir.`
        }
            } else (
                calculate.innerHTML = `Lütfen geçerli bir mevcut balance giriniz.`
            )
        } else (
            calculate.innerHTML = `Lütfen geçerli bir gasoline litresi giriniz.`
        )
    }
} else (
    calculate.innerHTML = `Lütfen geçerli bir yakıt türü numarası giriniz.`
)


if (fuelType >= 0 && fuelType <= 3) {
    if (fuelType == 2) {
        let lpgLiter = Number(prompt('Please enter how many liters of LPG you would like to purchase.'))
        if (lpgLiter > 0 && Number ) {
            let balance = Number(prompt('Please enter your current balance.'))
            if (balance >= 0) {
                let lpgBalance = lpgLiter*lpg
        if (balance < lpgBalance) {
            calculate.innerHTML = `Satın almak istediğiniz LPG'nin toplam tutarı ${lpgBalance} Türk Lirası iken sizin güncel balanceniz ise ${balance} Türk Lirası olduğundan ötürü satın alma işleminiz balance yetersizliğinden reddedilmiştir.`
        } else {
            calculate.innerHTML = `Satın almak istediğiniz LPG'nin toplam tutarı ${lpgBalance} Türk Lirası iken sizin güncel balanceniz ise ${balance} Türk Lirası olduğundan ötürü satın alma işleminiz başarıyla gerçekleştirilmiştir.`
        }
            } else (
                calculate.innerHTML = `Lütfen geçerli bir mevcut balance giriniz.`
            )
        } else (
            calculate.innerHTML = `Lütfen geçerli bir LPG litresi giriniz.`
        )
    }
} else (
    calculate.innerHTML = `Lütfen geçerli bir yakıt türü numarası giriniz.`
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
            calculate.innerHTML = `Satın almak istediğiniz dieselin toplam tutarı ${dieselBalance} Türk Lirası iken sizin güncel balanceniz ise ${balance} Türk Lirası olduğundan ötürü satın alma işleminiz başarıyla gerçekleştirilmiştir.`
        }
            } else (
                calculate.innerHTML = `Lütfen geçerli bir mevcut balance giriniz.`
            )
        } else (
            calculate.innerHTML = `Lütfen geçerli bir diesel litresi giriniz.`
        )
    }
} else (
    calculate.innerHTML = `Lütfen geçerli bir yakıt türü numarası giriniz.`
)