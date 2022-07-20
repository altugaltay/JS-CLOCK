let username = "altug"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

console.log("Merhaba", username," sitemize hoşgeldin"," mail adresin: ",email)

let info = `Merhaba ${username} sitemize hoşgeldin.. mail adresin: ${email}
mail adresinin uzunluğu: ${email.length}

senin adın: ${username}

kısa adın: ${username[0]}.

borcunuz:${5*10}TL

Tarih: ${new Date().getFullYear()}

saat: ${new Date().getHours()}
`

console.log(info)