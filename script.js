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
        let gasolineLitre = Number(prompt('Kaç litre gasoline almak istiyorsunuz lütfen giriniz.'))
        if (gasolineLitre > 0 && Number ) {
            let bakiye = Number(prompt('Lütfen mevcut bakiyenizi giriniz.'))
            if (bakiye >= 0 ) {
                let gasolineHesap = gasolineLitre*gasoline
        if (bakiye < gasolineHesap) {
            calculate.innerHTML = `Satın almak istediğiniz gasolinein toplam tutarı ${gasolineHesap} Türk Lirası iken sizin güncel bakiyeniz ise ${bakiye} Türk Lirası olduğundan ötürü satın alma işleminiz bakiye yetersizliğinden reddedilmiştir.`
        } else {
            calculate.innerHTML = `Satın almak istediğiniz gasolinein toplam tutarı ${gasolineHesap} Türk Lirası iken sizin güncel bakiyeniz ise ${bakiye} Türk Lirası olduğundan ötürü satın alma işleminiz başarıyla gerçekleştirilmiştir.`
        }
            } else (
                calculate.innerHTML = `Lütfen geçerli bir mevcut bakiye giriniz.`
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
        let lpgLitre = Number(prompt('Kaç litre LPG almak istiyorsunuz lütfen giriniz.'))
        if (lpgLitre > 0 && Number ) {
            let bakiye = Number(prompt('Lütfen mevcut bakiyenizi giriniz.'))
            if (bakiye >= 0) {
                let lpgHesap = lpgLitre*lpg
        if (bakiye < lpgHesap) {
            calculate.innerHTML = `Satın almak istediğiniz LPG'nin toplam tutarı ${lpgHesap} Türk Lirası iken sizin güncel bakiyeniz ise ${bakiye} Türk Lirası olduğundan ötürü satın alma işleminiz bakiye yetersizliğinden reddedilmiştir.`
        } else {
            calculate.innerHTML = `Satın almak istediğiniz LPG'nin toplam tutarı ${lpgHesap} Türk Lirası iken sizin güncel bakiyeniz ise ${bakiye} Türk Lirası olduğundan ötürü satın alma işleminiz başarıyla gerçekleştirilmiştir.`
        }
            } else (
                calculate.innerHTML = `Lütfen geçerli bir mevcut bakiye giriniz.`
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
        let dieselLitre = Number(prompt('Kaç litre diesel almak istiyorsunuz lütfen giriniz.'))
        if (dieselLitre > 0 && Number ) {
            let bakiye = Number(prompt('Lütfen mevcut bakiyenizi giriniz.'))
            if (bakiye >= 0) {
                let dieselHesap = dieselLitre*diesel
        if (bakiye < dieselHesap) {
            calculate.innerHTML = `Satın almak istediğiniz dieselin toplam tutarı ${dieselHesap} Türk Lirası iken sizin güncel bakiyeniz ise ${bakiye} Türk Lirası olduğundan ötürü satın alma işleminiz bakiye yetersizliğinden reddedilmiştir.`
        } else {
            calculate.innerHTML = `Satın almak istediğiniz dieselin toplam tutarı ${dieselHesap} Türk Lirası iken sizin güncel bakiyeniz ise ${bakiye} Türk Lirası olduğundan ötürü satın alma işleminiz başarıyla gerçekleştirilmiştir.`
        }
            } else (
                calculate.innerHTML = `Lütfen geçerli bir mevcut bakiye giriniz.`
            )
        } else (
            calculate.innerHTML = `Lütfen geçerli bir diesel litresi giriniz.`
        )
    }
} else (
    calculate.innerHTML = `Lütfen geçerli bir yakıt türü numarası giriniz.`
)