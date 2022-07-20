
let username = prompt("Adınızı Giriniz","Harf kullanınız")

let age = prompt("Yaşınızı Giriniz","Sayı Kullanınız")

let info = document.querySelector("#info")


if(age>18 && username){
    info.innerHTML = "Ehliyet alabilir"
}

else if(age<18 && username){

    info.innerHTML = "Yaş bilginiz yok ve ya 18 yaşından küçüksünüz"

}

else if(!username){
    info.innerHTML = "İsim bilginizi giriniz" 
}