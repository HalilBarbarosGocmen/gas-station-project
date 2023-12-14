let yakitMetni = `
Gasoline : 1
LPG : 2
Diesel : 3

Please enter the number of the fuel type you want to calculate and buy.

`


let gasoline = 15.50, lpg = 7, diesel = 16.60
let calculate = document.querySelector('#calculate') 




let yakıtTuru = Number(prompt(yakitMetni))
if (yakıtTuru >= 0 && yakıtTuru <= 3) {
    if (yakıtTuru == 1) {
        let gasolineLitre = Number(prompt('Please enter how many liters of gasoline you would like to buy.'))
        if (gasolineLitre > 0 && Number ) {
            let account = Number(prompt('Please enter your current balance.'))
            if (account >= 0 ) {
                let gasolineHesap = gasolineLitre*gasoline
        if (account < gasolineHesap) {
            calculate.innerHTML = `Satın almak istediğiniz gasolinein toplam tutarı ${gasolineHesap} Türk Lirası iken sizin güncel accountniz ise ${account} Türk Lirası olduğundan ötürü satın alma işleminiz account yetersizliğinden reddedilmiştir.`
        } else {
            calculate.innerHTML = `Satın almak istediğiniz gasolinein toplam tutarı ${gasolineHesap} Türk Lirası iken sizin güncel accountniz ise ${account} Türk Lirası olduğundan ötürü satın alma işleminiz başarıyla gerçekleştirilmiştir.`
        }
            } else (
                calculate.innerHTML = `Lütfen geçerli bir mevcut account giriniz.`
            )
        } else (
            calculate.innerHTML = `Lütfen geçerli bir gasoline litresi giriniz.`
        )
    }
} else (
    calculate.innerHTML = `Lütfen geçerli bir yakıt türü numarası giriniz.`
)


if (yakıtTuru >= 0 && yakıtTuru <= 3) {
    if (yakıtTuru == 2) {
        let lpgLitre = Number(prompt('Please enter how many liters of LPG you would like to purchase.'))
        if (lpgLitre > 0 && Number ) {
            let account = Number(prompt('Please enter your current balance.'))
            if (account >= 0) {
                let lpgHesap = lpgLitre*lpg
        if (account < lpgHesap) {
            calculate.innerHTML = `Satın almak istediğiniz LPG'nin toplam tutarı ${lpgHesap} Türk Lirası iken sizin güncel accountniz ise ${account} Türk Lirası olduğundan ötürü satın alma işleminiz account yetersizliğinden reddedilmiştir.`
        } else {
            calculate.innerHTML = `Satın almak istediğiniz LPG'nin toplam tutarı ${lpgHesap} Türk Lirası iken sizin güncel accountniz ise ${account} Türk Lirası olduğundan ötürü satın alma işleminiz başarıyla gerçekleştirilmiştir.`
        }
            } else (
                calculate.innerHTML = `Lütfen geçerli bir mevcut account giriniz.`
            )
        } else (
            calculate.innerHTML = `Lütfen geçerli bir LPG litresi giriniz.`
        )
    }
} else (
    calculate.innerHTML = `Lütfen geçerli bir yakıt türü numarası giriniz.`
)


if (yakıtTuru >= 0 && yakıtTuru <= 3) {
    if (yakıtTuru == 3) {
        let dieselLitre = Number(prompt('Please enter how many liters of diesel you would like to buy.'))
        if (dieselLitre > 0 && Number ) {
            let account = Number(prompt('Please enter your current balance.'))
            if (account >= 0) {
                let dieselHesap = dieselLitre*diesel
        if (account < dieselAccount) {
            calculate.innerHTML = `Since the total amount of diesel you want to buy is ${dieselAccount} Turkish Lira and your current balance is ${balance} Turkish Lira, your purchase has been rejected because your balance is insufficient.`
        } else {
            calculate.innerHTML = `Satın almak istediğiniz dieselin toplam tutarı ${dieselHesap} Türk Lirası iken sizin güncel accountniz ise ${account} Türk Lirası olduğundan ötürü satın alma işleminiz başarıyla gerçekleştirilmiştir.`
        }
            } else (
                calculate.innerHTML = `Lütfen geçerli bir mevcut account giriniz.`
            )
        } else (
            calculate.innerHTML = `Lütfen geçerli bir diesel litresi giriniz.`
        )
    }
} else (
    calculate.innerHTML = `Lütfen geçerli bir yakıt türü numarası giriniz.`
)