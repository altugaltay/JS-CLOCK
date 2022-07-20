let userName = prompt("Kullanıcı Bilginizi Yazınız")

let info = document.querySelector("#info")

info.innerHTML = `${userName.length>0 ? userName : "Bilgi Yok :/"}`

let boolean;

const isBooleanTrue = boolean ? true : false;

console.log(isBooleanTrue)

console.log(boolean)

let firstCity = "Ankara";

let secondCity = "İstanbul";

const isEqual = (firstCity === secondCity) ? "İki şehir aynı" : "İki şehir aynı değil";

console.log(isEqual)

var money;
    var canBuy = 
        (money < 17) ? "Satın alamazsın..":
        (money > 30) ? "Satın alabilirsin..":
        "Para miktarını girmen gerekmektedir..";

    console.log(canBuy) 