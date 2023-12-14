let yakitMetni = `
Benzin : 1
LPG : 2
Dizel : 3

Lütfen hesaplamak ve almak istediğiniz yakıt türünün numarasını giriniz.

`


let benzin = 15.50, lpg = 7, dizel = 16.60
let calculate = document.querySelector('#calculate') 




let yakıtTuru = Number(prompt(yakitMetni))
if (yakıtTuru >= 0 && yakıtTuru <= 3) {
    if (yakıtTuru == 1) {
        let benzinLitre = Number(prompt('Kaç litre benzin almak istiyorsunuz lütfen giriniz.'))
        if (benzinLitre > 0 && Number ) {
            let bakiye = Number(prompt('Lütfen mevcut bakiyenizi giriniz.'))
            if (bakiye >= 0 ) {
                let benzinHesap = benzinLitre*benzin
        if (bakiye < benzinHesap) {
            calculate.innerHTML = `Satın almak istediğiniz benzinin toplam tutarı ${benzinHesap} Türk Lirası iken sizin güncel bakiyeniz ise ${bakiye} Türk Lirası olduğundan ötürü satın alma işleminiz bakiye yetersizliğinden reddedilmiştir.`
        } else {
            calculate.innerHTML = `Satın almak istediğiniz benzinin toplam tutarı ${benzinHesap} Türk Lirası iken sizin güncel bakiyeniz ise ${bakiye} Türk Lirası olduğundan ötürü satın alma işleminiz başarıyla gerçekleştirilmiştir.`
        }
            } else (
                calculate.innerHTML = `Lütfen geçerli bir mevcut bakiye giriniz.`
            )
        } else (
            calculate.innerHTML = `Lütfen geçerli bir benzin litresi giriniz.`
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
        let dizelLitre = Number(prompt('Kaç litre dizel almak istiyorsunuz lütfen giriniz.'))
        if (dizelLitre > 0 && Number ) {
            let bakiye = Number(prompt('Lütfen mevcut bakiyenizi giriniz.'))
            if (bakiye >= 0) {
                let dizelHesap = dizelLitre*dizel
        if (bakiye < dizelHesap) {
            calculate.innerHTML = `Satın almak istediğiniz dizelin toplam tutarı ${dizelHesap} Türk Lirası iken sizin güncel bakiyeniz ise ${bakiye} Türk Lirası olduğundan ötürü satın alma işleminiz bakiye yetersizliğinden reddedilmiştir.`
        } else {
            calculate.innerHTML = `Satın almak istediğiniz dizelin toplam tutarı ${dizelHesap} Türk Lirası iken sizin güncel bakiyeniz ise ${bakiye} Türk Lirası olduğundan ötürü satın alma işleminiz başarıyla gerçekleştirilmiştir.`
        }
            } else (
                calculate.innerHTML = `Lütfen geçerli bir mevcut bakiye giriniz.`
            )
        } else (
            calculate.innerHTML = `Lütfen geçerli bir dizel litresi giriniz.`
        )
    }
} else (
    calculate.innerHTML = `Lütfen geçerli bir yakıt türü numarası giriniz.`
)