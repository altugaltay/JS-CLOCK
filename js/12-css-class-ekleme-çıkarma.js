
let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("first","second","third")
greeting.classList.remove("text-primary","first","second")

console.log(greeting.classList)