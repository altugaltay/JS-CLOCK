let score = prompt("Puanı Girin")

let info = document.querySelector("#info")

const smile =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>`

const sad = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>`
info.classList.add("text-primary")
if(score>100 || score < 0){
    info.innerHTML = "Geçerli Bir Not Giriniz"
}

else if(score<100 && score>90){
    
    info.innerHTML = `AA ${smile} `
    
}
else if(score<90 && score>85){
    info.innerHTML = `BA ${smile} `
}
else if(score<85 && score>80){
    info.innerHTML = `BB ${smile} `
}
else if(score<80 && score>75){
    info.innerHTML = `CB ${smile} `
}

else if(score<75 && score>70){
    info.innerHTML = `CC ${smile} `
}
else if(score<70 && score>65){
    info.innerHTML = `DC ${smile} `
}
else if(score<65 && score>60){
    info.innerHTML = `DD ${smile} `
}
else if(score<60 && score>55){
    info.innerHTML = `FD ${smile} `
}
else if(score<55 && score>0){
   
    info.innerHTML = `FF ${sad} `
    info.classList.remove("text-primary")
    info.classList.add("text-danger")
}