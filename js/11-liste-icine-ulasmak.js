
let lastChild = document.querySelector("ul#list>li:last-child")

console.log(lastChild.innerHTML)

lastChild.innerHTML = "son oge degisti"

let firstChild = document.querySelector("ul#list>li:first-child")

console.log(firstChild.innerHTML)

firstChild.innerHTML = "ilk oge degisti"

let ulDOM = document.querySelector("ul#list")

let liDOM = document.createElement('li')

liDOM.innerHTML = "Yeni Öge"

ulDOM.append(liDOM)

ulDOM.prepend(liDOM)