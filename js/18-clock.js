let fullName=prompt("İsminizi Giriniz:");
let userName = document.querySelector("#userName")
userName.innerHTML = `${fullName}` 
const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];


function clockFunction() {
    let dateTime=new Date();
    let day=days[dateTime.getDay()]
    let hrs=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();



    document.querySelector("#hours").innerHTML=hrs;
    document.querySelector("#minute").innerHTML=min;
    document.querySelector("#seconds").innerHTML=sec;
    document.querySelector("#day").innerHTML=day;
}

setInterval(clockFunction,10);