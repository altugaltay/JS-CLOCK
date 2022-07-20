let email = "altayaltug1997@gmail.com"
let firstName = "Altuğ"
let lastName = "Altay"

console.log(email.length)
console.log(firstName[0])
console.log(firstName.charAt(0))

firstName = firstName.toUpperCase()

console.log(firstName)

firstName = firstName.toLowerCase()

console.log(firstName)

console.log(email.search("@"))
console.log(email[14])

let domain = ""

domain = email.slice(email.search("@")+1)

console.log(domain)

console.log(domain.indexOf("."))

domain = domain.slice(0,domain.indexOf("."))
console.log(domain)

email = email.replace("gmail.com","kodluyoruz.org")

console.log(email)

console.log(email.includes("@"))

console.log(email.endsWith("kodluyoruz.org"))

console.log(email.startsWith("altug"))

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName)

let url = "www.kodluyoruz.org"

console.log()

url = url.slice(url.indexOf(".")+1)

console.log(url)

let language = "Java"

language = language.replace("Java","JavaScript")

console.log(language)

