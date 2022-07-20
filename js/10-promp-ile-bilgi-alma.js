function istek()
{
    let kelime = prompt("Adınızı Giriniz","Sadece harf kullanın")

    let greeting = document.querySelector("#greeting")

    greeting.innerHTML = `${greeting.innerHTML} <small style = "color:red">${kelime}</small>`


}